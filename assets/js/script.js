function createCalcs(){
    let calculater = $('.calculater-body');
    if(calculater.length == 0){
        setTimeout(createCalcs, 50);
        return;
    }

    //gather value events
    $('#current_weight input').on('change blur',function(){
        let current_weight = $(this).val();
        console.log($(this).val() + ': current weight');

    });

    $('#goal_weight input').on('change blur',function(){
        let goal_weight = $(this).val();
        console.log($(this).val() + ': goal weight');
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
        
    });
}


    createCalcs()