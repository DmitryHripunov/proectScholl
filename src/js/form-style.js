inputsEl.forEach((inputEl) => {
  inputEl.addEventListener('focus', function (e) {
    const inputFocused = e.target.closest('.input');
    inputFocused.classList.add('input-focused');
  });

  inputEl.addEventListener('blur', function (e) {
    const inputFocusEL = e.target.closest('.input');
    if (inputEl.value === '') {
      labelEl.forEach((labelElem) => {
        inputFocusEL.classList.remove('input-focused');
      });
    }
  });

  maillEl.addEventListener('blur', function (e) {
    const Focused = e.target.closest('.input');
    if (!maillEl.value.includes('@')) {
      Focused.classList.remove('input-focused');
      Focused.classList.add('invalid');
    }
    
    if (maillEl.value === '') {
      Focused.classList.remove('input-focused');
      Focused.classList.remove('invalid');
    }
  });
});



