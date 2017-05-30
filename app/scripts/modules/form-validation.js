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