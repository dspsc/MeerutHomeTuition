var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
      $element.addClass("in-view");
    } else {
      //   $element.removeClass('in-view');
    }
    // break;
  });
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");


var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ],{
    type:'loop',
    autoplay:'play',
    // classes: {
    //   arrows: 'splide__arrows bg-transparent',
    //   arrow : 'splide__arrow bg-red-300 herp',
    //   prev  : 'splide__arrow--prev your-class-prev',
    //   next  : 'splide__arrow--next your-class-next',
    // },
  } ).mount();
}