  $(document).ready(function() {
    $('.slider-drag1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      swipe: false,
      prevArrow: '<img class="arrow arrow-left " src="/static/categorias/contenidoEstatico/landings/Mundial_Rusia_2018/assets/img/section/arrow-left.svg"></img>',
      nextArrow: '<img class="arrow arrow-right " src="/static/categorias/contenidoEstatico/landings/Mundial_Rusia_2018/assets/img/section/arrow-right.svg"></img>',
      vertical: false,
      infinite: true,
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        },        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false,
            swipe: false,
          }
        }
      ]
    });

    $('.center').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 1,
      // autoplay:true,
      speed: 500,
      variableWidth: false,
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            doots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            doots: false,
          }
        }
      ]
    });
    $('.slider-productos').slick({
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: true,
      speed: 500,
      variableWidth: false,
    });


    $(window).on('resize orientationchange', function() {
      $('.center').slick('resize');
    });




  });
