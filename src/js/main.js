'use strict'

const searchEl = document.querySelector('.submit-js');
const headerEl = document.querySelector('.header-js');
const searhFieldEl = document.querySelector('.search-js');
const closeEl = document.querySelector('.search-close-js');

const openMenuEl = document.querySelectorAll('.open-menu-js');

openMenuEl.forEach((menuLink) => {
  menuLink.addEventListener('click', function (e) {
    e.preventDefault()
    headerEl.classList.toggle('open-menu');

  });
});




searchEl.addEventListener('click', openField);

closeEl.addEventListener('click', closeField);


function openField(e) {
  e.preventDefault();
  headerEl.classList.toggle('search-open');
  searhFieldEl.focus();
  this.removeEventListener('click', openField);
};

function closeField() {
  headerEl.classList.remove('search-open');
  searchEl.addEventListener('click', openField);
}

document.addEventListener('keydown', function (e) {
  if (e.target === "Escape" || e.target === "Esc" || e.keyCode === 27) {
    headerEl.classList.remove('search-open');
    searchEl.addEventListener('click', openField);
    searhFieldEl.value = '';
  };
});
 
closeEl.addEventListener('click', function (e) {
  e.preventDefault()
  headerEl.classList.remove('search-open');
  searchEl.addEventListener('click', openField);
  searhFieldEl.value = '';
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('.nav__searh')) {
    headerEl.classList.remove('search-open');
    searchEl.addEventListener('click', openField);
    searhFieldEl.value = '';
  };
});



