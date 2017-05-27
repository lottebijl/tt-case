$(document).foundation();

$(".contact__form").on("submit", function(ev) {
  ev.preventDefault();
});

$(".contact__form").on("formvalid.zf.abide", function(ev,frm) {
  $('.alert.success').show();
  $('.contact__fields').hide();
  $('.btn-submit').hide();
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
        template: '<div class="columns small-24 medium-12 large-8 end"><div class="instafeed__item"><a href="{{link}}"><img src="{{image}}" /></a><div class="instafeed__content"><p>{{caption}}</p></div></div></div>',
        after: function() {
            console.log('after');
        },
        success: function() {
            console.log('success');
        }
    });
    userFeed.run();
  } else {
    $('.btn-feed').show();
  }
}

getInstagramFeed();



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

$('.slick-slider').slick({
  speed: 300,
  slidesToShow: 1
});


