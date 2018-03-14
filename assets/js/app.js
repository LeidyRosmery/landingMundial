var widthWindows = $(window).width();
$(document).ready(function() {
  if (widthWindows > 992) {
    $('.bg-flipper').removeClass('animation-bg');
    $('#demuestra_hincha').hover(
      function() {
        $('.bg-change').addClass('bg-img');
        $('.bg-change').removeClass('bg-movil');
      },
      function() {
        $('.bg-change').addClass('bg-movil');
        $('.bg-change').removeClass('bg-img');
      }
    );
  }else {
      $('.bg-flipper').addClass('animation-bg');
  }
});
$(document).resize(function() {
  if (widthWindows > 992) {
    $('.bg-flipper').removeClass('animation-bg');
    $('#demuestra_hincha').hover(
      function() {
        $('.bg-change').addClass('bg-img');
        $('.bg-change').removeClass('bg-movil');
      },
      function() {
        $('.bg-change').addClass('bg-movil');
        $('.bg-change').removeClass('bg-img');
      }
    );
  }else {
      $('.bg-flipper').addClass('animation-bg');
  }
});
