function createCalcs(){

    //change active selection bubbles
    $('.calc-item span.button').on('click', function(){
        if($(this).hasClass('active')){
            return;
        } else {
            $(this).parent().find('span.button.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    //change active inputs for HEIGHT option(FT+IN VS CM)
    $('.calc-item span.button.height').on('click', function(){
        let trigger = $(this).attr('data-trigger');
        if($(`div.height_option[data-trigger="${trigger}"]`).hasClass('active')){
           return; 
        }
        $(`div.height_option.active`).removeClass('active');
        $(`div.height_option[data-trigger="${trigger}"]`).addClass('active');
    });

    $('.calc-cta').on('click', function(){
        //check for errors and then calculate
        doMaths();
    });
}

function doMaths(){  
    details = [];
    $('.calc-item span.active').each(function(){
        let value = $(this).attr('data-trigger');
        let label = $(this).parent().attr('id');

        let item = {label: `${label}`, value: `${value}`};
        details.push(item);
        //console.log(details)
    });

    //if weight is in lbs --> convert to kg
    let w;
    let weight = details.filter(x => x.label === 'current_weight');
    let isKg = weight[0].value.indexOf('kg') > -1;
    if(isKg){
        w = $('#current_weight input').val();
    } else {
        w = $('#current_weight input').val()*0.453592;
    }

    //if height is in ft/in --> convert to cm 
    let h;
    let height = details.filter(x => x.label === 'current_height');
    let isCm = height[0].value.indexOf('cm') > -1;
    if(isCm){
        h = Number($('#current_height .active input').val());
    } else {
        let ft = $('#current_height input[placeholder="ft"]').val()*12;
        let inch = $('#current_height input[placeholder="in"]').val();
        h = (Number(ft) + Number(inch))*2.54; 
    }

    //age
    let y;
    y = Number($('#age input').val());

    //gender
    //let gender = details.filter(x => x.label === 'gender');
    let result = (10*w) + (6.25*h) - (5*y)
    let trigger = $('#gender .button.active').attr('data-trigger');
    if(trigger === 'female'){
        result = result - 161;
    }

    if(trigger === 'male'){
        result = result + 5;
    }

    //activity level
    let activity = Number($('#activity .button.activity-level.active').attr('value'));
    let TDEE = result*activity

    let daily_cal = TDEE-500;
    $('.results_body .cal_result').text(daily_cal.toFixed());

    //protein 35% 4 calories per gram
    let protein = (daily_cal*0.35)/4;
    $('.results_body .protein_result').text(`${protein.toFixed()}g`)

    //fat 30% 9 calories per gram
    let fat = (daily_cal*0.3)/9;
    $('.results_body .fat_result').text(`${fat.toFixed()}g`);

    //carb 35% 4 calories per gram
    let carb = (daily_cal*0.35)/4;
    $('.results_body .carb_result').text(`${carb.toFixed()}g`);

    $('.results_body').addClass('show');
}
/*
            <div class="results_body">
                <div>daily calorie goal: <span class="cal_result"></span></div>
                <div>protein: <span class="protein_result"></span></div>
                <div>fat: <span class="fat_result"></span></div>
                <div>carbs: <span class="carb_result"></span></div>
            </div>
*/

    createCalcs();
    //doMaths();