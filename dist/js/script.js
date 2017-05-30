$(document).foundation();

$(".contact__form").on("submit", function(ev) {
  ev.preventDefault();
});

$(".contact__form").on("formvalid.zf.abide", function(ev,frm) {
  var tl = new TimelineLite();
  var errorMessage = $('.alert.error');
  var successMessage = $('.alert.success');
  var formFields = $('.contact__fields');
  var btnSubmit = $('.btn-submit');
  hideForm();
  function hideForm(){
    TweenMax.staggerTo(formFields, 0.8, {y:-600, ease:Back.easeIn, onComplete:showSuccess}, 0);
    TweenMax.staggerTo(formFields, 0.6, {opacity:0, ease:Back.easeIn}, 0);
    TweenMax.staggerTo(errorMessage, 0.6, {opacity:0, ease:Back.easeOut}, 0);
    TweenMax.staggerTo(btnSubmit, 0.6, {scale:0, opacity:0, ease:Back.easeOut, force3D:true}, 0.5);
  }
  function showSuccess(){
    TweenMax.staggerTo(successMessage, 0.5, {scale:1, opacity:1, delay:0.5, display:'block', ease:Power1.easeOut, force3D:true}, 0);
  }

});

$(".contact__form").on('change', 'input, textarea', function(){
  if($(this).prop('required')){
    $(this).addClass('dirty');
  }
});
function getInstagramFeed(){
  var accessStr   = window.location.hash.substr(1);
  var accessCode  = accessStr.replace(/access_token=/g,'');
  var userID      = accessCode.split('.');
  var user        = userID[0];

  if (accessCode){
    var userFeed = new Instafeed({
        get: 'user',
        userId: user,
        clientId:'3f82142d11d34cef993bfb28ed7999bf',
        accessToken:accessCode,
        resolution:'standard_resolution',
        template: '<div class="column column-block"><div class="instafeed__item"><a href="{{link}}"><img src="{{image}}" /></a><div class="instafeed__content"><p>{{caption}}</p></div></div></div>',
        after: function() {
            console.log('after');
        },
        success: function() {
            console.log('success');
            $('.instafeed__container').masonry({
              itemSelector: '.instafeed__container .column-block'
            });
        }
    });
    userFeed.run();
  } else {
    $('.btn-feed').show();
  }
}

getInstagramFeed();



$('.instafeed__container').masonry({
  itemSelector: '.instafeed__container .column-block'
});
function Menu(){
  var menuBtn = $('.btn-menu');
  var mobileMenu = $('.mobile-menu');
  menuBtn.click(function(event) {
    event.preventDefault();
    mobileMenu.toggleClass('open');
    menuBtn.toggleClass('close');
    if (mobileMenu.attr('class') == 'open'){
      mobileMenu.on('touchmove', function(event) {
        event.preventDefault();
      });
    }
  });

}

Menu();

$(".btn-scrolldown").click(function (event){
  event.preventDefault();
  var position = parseInt($(".content-block").offset().top) - 80;
  $('html, body').animate({
      scrollTop: position
  }, 800);
});
$('.slick-slider').slick({
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.buttons .btn-prev'),
  nextArrow: $('.buttons .btn-next')
});


var tl = new TimelineLite();
var logo = $('.top-navigation .logo');
var nav = $('.top-navigation .top-navigation__nav');
var headerImage = $('.header-image .slide__content');
var headerTitle = $('.header-image .slide__content .header__title');
var mouse = $('.header-image .btn-scrolldown .icon-scrolldown');

function animatePage(){
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
}

function animateLogo(){
  logo.mouseenter(function() {
    tl.to(logo, 0.3, {rotation:360, ease: Power1.easeInOut, onComplete: reset});
    function reset(){
      tl.to(logo, 0.3, {rotation:0, ease: Power1.easeInOut});
    }
  });
}
animateLogo();

$(document).ready(function() {
  animatePage();
});

function animateMouse(){
  mouse.mouseenter(function() {
    tl.to(mouse, 0.2, {scale:0.95, ease: Power1.easeInOut});
    })
  .mouseleave(function() {
    tl.to(mouse, 0.2, {scale:1, ease: Power1.easeInOut});
  });
}
animateMouse();

