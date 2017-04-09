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
  //-----------------------------------------------
  //     Add link
  //------------------------------------------------
  $('.js-add-link').on('click', function(event){
    event.preventDefault();
    $('.js-form').toggleClass('is-visible');
  });

  //-----------------------------------------------
  //     show modal
  //------------------------------------------------
  $('.js-show-modal').on('click', function(event){
    event.preventDefault();
    $('.js-modal').addClass('is-visible');
    $('.js-modal-overlay').addClass('is-visible');
  });

  $('.js-modal-overlay').on('click', function(event){
    $('.js-modal').removeClass('is-visible');
    $('.js-modal-overlay').removeClass('is-visible');
  });
});
