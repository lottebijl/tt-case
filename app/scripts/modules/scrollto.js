$(".btn-scrolldown").click(function (event){
  event.preventDefault();
  var position = parseInt($(".content-block").offset().top) - 80;
  $('html, body').animate({
      scrollTop: position
  }, 800);
});