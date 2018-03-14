  $(document).ready(function() {
    $('.slider-drag1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      cssEase: 'linear',
      arrows: true,
      swipe: false,
      autoplaySpeed: 8000,
      autoplay: true,
      vertical: false,
      infinite: true,
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            dots:true,
swipe:true,
          }
        }
      ]
    });

    $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay:true,
    speed: 500,
    variableWidth: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode:false,
                  doots:true,
          slidesToShow:3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          doots:false,
        }
      }
    ]
  });
  $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('beforeChange', currentSlide, nextSlide);
  });
  $('.center').on('afterChange', function(event, slick, currentSlide){
    console.log('afterChange', currentSlide);
  });

    $(window).on('resize orientationchange', function() {
      $('.center').slick('resize');
    });




  });
