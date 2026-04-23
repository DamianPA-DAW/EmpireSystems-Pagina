// Swiper slider JS

(function () {
  // vertical slider
  const vertical_swiper = new Swiper(".vertical-swiper", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //   nested swiper
  var nestedVerticalSwiper = new Swiper(".nested-horizontal-swiper", {
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var nestedHorizontalSwiper = new Swiper(".nested-vertical-swiper", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //   Mouseweel  swiper
  var mouseweelSwiper = new Swiper(".mouseweel-swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //   Autoplay variant
  var swiper = new Swiper(".autoplay-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Effect coverflow
  var swiper = new Swiper(".coverflow-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// shoping place dashboard

const reviewswiper = new Swiper('.review-slider', {
    slidesPerView: 1,
    grid: {
      rows: 1,
    },
    spaceBetween: 20,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000, 
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})();
