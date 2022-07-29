$('.menu > a').on('click', function(){
    let sectionId = $(this).attr('id');
  
    $('section').addClass('display-none');
    $(`#${sectionId}-section`).removeClass('display-none');
  
    $('#menu-open').click();
  })