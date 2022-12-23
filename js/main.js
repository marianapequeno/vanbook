$(window).scroll(function() {
  var windowTop = $(this).scrollTop();
  $('.anime').each(function() { //O método each() faz um loop, equivalente ao forEach() do JS vanilla
    if(windowTop > $(this).offset().top - 500) {
      $(this).addClass('anime-init'); 
    } else {
      $(this).removeClass('anime-init');
    }
  });
});