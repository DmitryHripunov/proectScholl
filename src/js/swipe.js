
var mySwiper = new Swiper('.main-section__banner', {
  speed: 400,
	slidesPerView: 1,
	loop: true,
  centeredSlides: true,
  spaceBetween: 20,
	navigation: {
		nextEl: '.btn_left',
		prevEl: '.btn_right',
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


var isSwiper = new Swiper('.about__main-banner', {
  speed: 600,
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  effect: 'cube',
  autoHeight: true,
  navigation: {
    nextEl: '.btn_left',
    prevEl: '.btn_right',
  },
  pagination: {
    el: '.pagination',
    type: 'bullets',
    bulletElement: 'span',
    clickable: true,
  },
});

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
      slidesPerView: 2,
      speed: 400,

    },
    // when window width is >= 550px
    550: {
      slidesPerView: 12,
    }
  }

});
