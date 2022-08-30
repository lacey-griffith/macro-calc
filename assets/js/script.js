function createCalcs(){

    $('.calc-item span.button').on('click', function(){
        if($(this).hasClass('active')){
            return;
        } else {
            $(this).parent().find('span.button.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.calc-item span.button.height').on('click', function(){
        let trigger = $(this).attr('data-trigger');
        if($(`div.height_option[data-trigger="${trigger}"]`).hasClass('active')){
           return; 
        }
        $(`div.height_option.active`).removeClass('active');
        $(`div.height_option[data-trigger="${trigger}"]`).addClass('active');
    });

    $('.calc-cta').on('click', function(){
        let g = $('#gender .active').attr('value');
        let w = $('#current_weight').attr('value');

        if(g == 'male'){
         //Men: calories/day = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5   
        }
        if(g == 'female'){
        //Women: calories/day = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161
        }

        if(w === 'lbs'){
            //convert to kg
        }
        if(w === 'kg'){
            //is kilograms
        }
    });
}


    createCalcs()