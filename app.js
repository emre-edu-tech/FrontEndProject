//-----------------------------------------------
//     Document Ready
//------------------------------------------------

$(document).ready(function(){
  $('.js-like').on('click', function(event){
    event.preventDefault();
    // refer the currently clicked element and changed its text to Liked!
    $(this).text('Liked!')
      .closest('.news-item')
      .addClass('is-liked');
  });
});
