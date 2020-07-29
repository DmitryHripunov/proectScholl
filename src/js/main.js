'use strict'

const bodyEl = document.body;
const searchEl = document.querySelector('.submit-js');
const headerEl = document.querySelector('.header-js');
const searhFieldEl = document.querySelector('.search-js');
const closeEl = document.querySelector('.search-close-js');

const openMenuEl = document.querySelectorAll('.open-menu-js');
const menuEl = document.querySelectorAll('.menu-page');

const tabEl = document.querySelectorAll('.tab-label-js');
const tabListEl = document.querySelector('.menu-page__list-js'); 

const modalContentEl = document.querySelector('.modal-content-js');
const modalElem = document.querySelector('.modal-js');
const focusFieldEl = document.querySelector('.input__field');
const modalCloseEl = document.querySelector('.close-modal-js');
const successBtnEl = document.querySelector('.success__btn-js');

const inputsEl = document.querySelectorAll('.input__field');
const labelEl = document.querySelectorAll('.input');
const maillEl = document.querySelector('.mail');
const inputMask = document.querySelector('.tel');


const bannerDescBtnEl = document.querySelectorAll('.about__main-btn-js');
const figureEl = document.querySelector('.about__main-figure');

const mapAnhorEl = document.querySelector('.show-map-btn-js');
const mapWrapperEl = document.querySelector('.map-wrapper');



//клик Escape
// document.addEventListener('keydown', function (e) {
//     if (e.target === "Escape" || e.target === "Esc" || e.keyCode === 27) {
//         headerEl.classList.remove('search-open');
//         bodyEl.classList.remove('modal-open');
//         bodyEl.classList.remove('open-menu');
//         figureEl.classList.remove('open-banner-desc');

//         searchEl.addEventListener('click', openField);
//         searhFieldEl.value = '';
//     };
// });


