function createCalcs(){
    let calculater = $('.calculater-body');
    if(calculater.length == 0){
        setTimeout(createCalcs, 50);
        return;
    }

    //gather value events
    $('#current_weight input').on('change blur',function(){
        let current_weight = $(this).val();
    });

    $('#goal_weight input').on('change blur',function(){
        let goal_weight = $(this).val();
    });

    $('#activity span').on('click',function(){
        if($(this).hasClass('active')){
            return;
        } else {
            $('#activity span.active').removeClass('active');
            $(this).addClass('active')
        }
    });

    $('.calc-cta').on('click', function(){
        if($('#activity span.active').length == 0){
            $('#activity .error').show();
        } else {
            $('#activity .error').hide();
        }

        if($('#current_weight input').val().length == 0){
            $('#current_weight .error').show();
        } else {
            $('#current_weight .error').hide();
        }

        if($('#goal_weight input').val().length == 0){
            $('#goal_weight .error').show();
        } else {
            $('#goal_weight .error').hide();
        }

        if(!$('#activity span.active').length == 0 && !$('#current_weight input').val().length == 0 && !$('#goal_weight input').val().length == 0){
            let current = Number($('#current_weight input').val());
            let activity = Number($('#activity span.active').attr('value'));

            let maint_cal = current * activity;
            maint_cal = maint_cal - 500;
            let protein = current * 0.8;
            let fat = current * 0.3;

            let protein_g = protein *4;
            let fat_g = fat*9;

            let x = protein_g + fat_g;
            let carb_cal = maint_cal - x;

            carbs = (carb_cal/4);

            $('.results_body .cal_result').html(`${Math.round(maint_cal)} calories`);
            $('.results_body .protein_result').html(`${Math.round(protein)} grams`);
            $('.results_body .fat_result').html(`${Math.round(fat)} grams`);
            $('.results_body .carb_result').html(`${Math.round(carbs)} grams`);
            $('.results_body').addClass('show');
        }

    });
}


    createCalcs()