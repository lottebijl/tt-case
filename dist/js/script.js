function Dropdown(){

  var dropdownBtn = $('.btn-dropdown');
  var dropdownContainer = $('.dropdown-container');

  dropdownBtn.click(function() {
    event.preventDefault();
    dropdownContainer.toggleClass('open');
    dropdownBtn.toggleClass('close');

    if (dropdownContainer.attr('class') == 'dropdown-container open'){
      dropdownBtn.html('Verberg trending technologiëen<i class="icon icon-down"></i>');
    } else {
      dropdownBtn.html('Toon trending technologiëen<i class="icon icon-down"></i>');
    }
  });

}

Dropdown();

function showFilters(){

  var filterBtn = $('.btn-filter');
  var filterContainer = $('form.filters');

  filterBtn.click(function() {

    filterContainer.toggleClass('open');
    filterBtn.toggleClass('close');

    if (filterContainer.attr('class') == 'filters open'){
      filterBtn.html('Verberg filters <i class="icon icon-down"></i>');
    } else {
      filterBtn.html('Toon filters <i class="icon icon-down"></i>');
    }
  });

}

showFilters();

function findJobcoach(){

  var searchBtn = $('.find-jobcoach .form-container form .btn-submit');
  var formContainer = $('.find-jobcoach .form-container');

  searchBtn.click(function() {
    event.preventDefault();
    formContainer.addClass('search');
    setTimeout(function(){
      formContainer.removeClass('search');
      formContainer.addClass('found');
    }, 2000);
  });

}

findJobcoach();

function selectOnChange(){
  $('select').on('change', function() {
    $(this).removeClass('pristine');
  })
}

selectOnChange();

function signUp(){

  var submitBtn = $('.section-nieuwsbrief .nieuwsbrief-form form .btn-submit');
  var formContainer = $('.section-nieuwsbrief .nieuwsbrief-form');

  submitBtn.click(function() {
    event.preventDefault();
    formContainer.addClass('success');
  });

}

signUp();

function signUpVacatures(){
  var submitBtn = $('.tile--email .btn-submit');
  var formContainer = $('.tile--email');

  submitBtn.click(function() {
    event.preventDefault();
    formContainer.addClass('success');
  });

}

signUpVacatures();


$(document).foundation();
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
function masonryFunction(){
  if (width > 480){
    var container = document.querySelector('#masonry-container');
    var msnry = new Masonry( container, {
      itemSelector: '#masonry-container .columns'
    });
  }
}


var colorBlock = $('#masonry-container .columns.colorblock-1');
var ctaBlock = $('#masonry-container .columns.cta');

if (width < 480){
  ctaBlock.after(colorBlock);
}
if (width > 480 && width < 1024){
  colorBlock.after(ctaBlock);
}
masonryFunction();



function Menu(){
  var menuBtn = $('.btn-menu');
  var mobileMenu = $('.mobile-menu');

  menuBtn.click(function() {
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

function Popup(){
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true 
  });
}

Popup();

$('.slick-slider').slick({
  speed: 300,
  slidesToShow: 4,
    responsive:[
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
          centerMode: false,
          variableWidth: false,
        }
      }
    ]
});

$('.slick-slider--notification').slick({
  speed: 300,
  slidesToShow: 3,
    responsive:[
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          centerMode: false,
          variableWidth: false,
        }
      },
    ]
});



$(".btn-down").click(function (){
  event.preventDefault();
    $('html, body').animate({
        scrollTop: $(".slider-container.slider-vacatures").offset().top
    }, 800);
});

$(".btn-scrollto").click(function (){
  console.log('scroll to');
  var position = parseInt($(".solliciteren-box").offset().top) - 500;
  event.preventDefault();
    $('html, body').animate({
        scrollTop: position
    }, 800);
});

function stickyTile(){
  var tileCall = $('.tile--calljobcoach');
  var sectionArticle = $('section.section-article');
  var articleHeight = parseInt(sectionArticle.height()) - tileCall.height() - 120;
  var controller = new ScrollMagic.Controller();
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  if (width > 480){
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: articleHeight})
      .setPin(".tile--calljobcoach")
    	// .addIndicators({name: "1 (duration: 100%)"}) // add indicators (requires plugin)
    	.addTo(controller);
  }

}

stickyTile();

// var Dropzone = require("dropzone");
// $(".dropzone").dropzone({ url: "/file/post" });
// Dropzone.options.myAwesomeDropzone = {
//   paramName: "file",
//   maxFilesize: 1
// };

var uploadBtn = $('.solliciteren-box .btn-upload');
var cancelBtn = $('.solliciteren-box .cancel');
var solliciterenContainer = $('.solliciteren-box');
var bevestingenStep = $('.solliciteren-box .steps li');

uploadBtn.click(function() {
  event.preventDefault();
  solliciterenContainer.addClass('show-dropzone');
  solliciterenContainer.removeClass('pristine');
});

cancelBtn.click(function() {
  event.preventDefault();
  solliciterenContainer.addClass('pristine');
  solliciterenContainer.removeClass('show-dropzone show-uploading uploading');
});

function uploadingFile(){
  bevestingenStep.removeClass('disabled');
  solliciterenContainer.removeClass('show-dropzone');
  solliciterenContainer.addClass('show-uploading');
  solliciterenContainer.removeClass('uploading');
}

function uploadSuccess(){
  solliciterenContainer.removeClass('uploading');
}

function formSuccess(){
  solliciterenContainer.removeClass('show-uploading');
  solliciterenContainer.addClass('show-thanks');
}
videojs("videojs", {}, function(){
  // Player (this) is initialized and ready.
});
