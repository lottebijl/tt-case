function Masonry(){
  console.log('masonry function');
  if ( $( ".instafeed__container" ).length ) {
    var container = document.querySelector('.instafeed__container');
    var msnry = new Masonry( container, {
      itemSelector: '.instafeed__container .columns'
    });
  }
}

