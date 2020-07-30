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

const moveUpEl = document.querySelector('.moveUp-js');

moveUpEl.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

