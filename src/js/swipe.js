
// main banner
var mySwiper = new Swiper('.main-section__banner', {
  speed: 400,
	slidesPerView: 1,
	loop: true,
  centeredSlides: true,
  spaceBetween: 1,
	navigation: {
    nextEl: '.btn_right',
    prevEl: '.btn_left',
  },
  pagination: {
    el: '.pagination',
    type: 'bullets',
    bulletElement: 'span',
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // },
});

// about banner
var isSwiper = new Swiper('.about__main-banner', {
  speed: 600,
  slidesPerView: 1,
  loop: false,
  centeredSlides: true,
  spaceBetween: 1,
  navigation: {
    nextEl: '.btn_right',
    prevEl: '.btn_left',
  },
  pagination: {
    el: '.pagination',
    type: 'bullets',
    bulletElement: 'span',
    clickable: true,
  },
});

// links
var linkSwiper = new Swiper('.links__list', {
  pagination: {
    el: '.pagination',
    type: 'bullets',
    bulletElement: 'span',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      loop: true,
      slidesPerView: 2,
      speed: 400,

    },
    // when window width is >= 550px
    700: {
      slidesPerView: 12,      
    }
  }
});

// information-swipe 
var isSwiper = new Swiper('.information-swipe', {
  
  pagination: {
    el: '.pagination',
    type: 'bullets',
    bulletElement: 'span',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      speed: 400,
      spaceBetween: 130,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    }
  }
});


