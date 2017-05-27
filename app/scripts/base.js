  var tl = new TimelineLite();
  var logo = $('.top-navigation .logo');
  var nav = $('.top-navigation .top-navigation__nav');
  var headerImage = $('.header-image .slide__content');
  var headerTitle = $('.header-image .slide__content .header__title');
$(document).ready(function() {

  tl.to(logo, 0.3, {opacity:1, scale:1, delay:0.3, ease: Power1.easeInOut, onComplete: showMenu});
  function showMenu(){
    tl.to(nav, 0.4, {opacity:1, x:0 , ease: Power1.easeInOut, onComplete: showHeader});
  }
  function showHeader(){
    tl.to(headerImage, 0.7, {opacity:1, delay:0.3, ease: Power1.easeInOut, onComplete: showTitle});
  }
  function showTitle(){
    tl.to(headerTitle, 0.5, {opacity:1, y:0, ease: Power1.easeInOut});
  }
});

function animateLogo(){
  logo.mouseenter(function() {
    tl.to(logo, 0.3, {rotation:360, ease: Power1.easeInOut, onComplete: reset});
    function reset(){
      tl.to(logo, 0.3, {rotation:0, ease: Power1.easeInOut});
    }
  });

}
animateLogo();
