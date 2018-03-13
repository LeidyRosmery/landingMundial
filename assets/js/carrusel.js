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

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      arrows: true,
      nextArrow: '<img class="flecha flecha-right" src="/static/categorias/contenidoEstatico/landings/Landing-Muebles-2018/assets/img/arrow-right.svg"></img>',
      prevArrow: '<img class="flecha flecha-left" src="/static/categorias/contenidoEstatico/landings/Landing-Muebles-2018/assets/img/arrow-left.svg"></img>',
      centerMode: true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 992,
        settings: "unslick"
      }]
    });

    $(window).on('resize orientationchange', function() {
      $('.slider-nav').slick('resize');
    });


    ;

  });
