$(document).foundation();

$(".contact__form").on("submit", function(ev) {
  ev.preventDefault();
});

$(".contact__form").on("formvalid.zf.abide", function(ev,frm) {
  $('.alert.success').show();
  $('.contact__fields').addClass('send');
  $('.btn-submit').addClass('send');
});

$(".contact__form").on('change', 'input, textarea', function(){
  if($(this).prop('required')){
    $(this).addClass('dirty');
  }
});