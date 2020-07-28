$('.block-docs__menu-btn').on('click', function(e){
  e.preventDefault();

  $('.block-docs__menu-btn').removeClass('active');
  $(this).addClass('active');

  let href = $(this).attr('href');
  $('.block-docs__pane ').removeClass('active').removeClass('in');
  $(href).addClass('active');

  setTimeout(function(){
    $(href).addClass('in');
  }, 250);
});
