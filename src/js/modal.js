modalContentEl.addEventListener('click', function (e) {
  e.preventDefault();

  bodyEl.classList.toggle('modal-open');
  focusFieldEl.focus();
});

// succcess
successBtnEl.addEventListener('click', (e) => {
  e.preventDefault()

  bodyEl.classList.remove('modal-open');
});

//кнопка закрыть модальное окно
modalCloseEl.addEventListener('click', function (e) {
  e.preventDefault()
  bodyEl.classList.remove('modal-open');
});

// клик вне окна
modalElem.addEventListener('click', function (e) {
  if (!e.target.closest('.modal-content-js')) {
    bodyEl.classList.remove('modal-open');
  };
});


