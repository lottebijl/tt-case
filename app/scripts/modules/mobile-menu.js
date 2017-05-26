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
