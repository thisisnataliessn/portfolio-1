// //Initiate carousel
//    $(document).ready(function () {
//      $('.carousel').flickity({
//        // options
//        cellAlign: 'left',
//        contain: true
//      });
//    })

var $carousel = $('.carousel');
// bind event listener first
$carousel.on( 'ready.flickity', function() {
  console.log('Flickity ready');
});
// initialize Flickity
$carousel.flickity({
  setGallerySize:false,
  imagesLoaded: true
});



  // Find all YouTube videos
  var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".main-topics");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function () {

    $(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

  });

  // When the window is resized
  $(window).resize(function () {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function () {

      var $el = $(this);
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));

    });

    // Kick off one resize to fix all videos on page load
  }).resize();