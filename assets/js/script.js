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
}


    createCalcs()