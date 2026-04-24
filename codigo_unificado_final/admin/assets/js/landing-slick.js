(function ($) {
  // $(document).ready(function(){
  //   $('.your-class').slick({
  //   });
  // });
  $('.hero-image').slick({
    centerMode: false,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    dots: false, 
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 321,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  });

})(jQuery);
