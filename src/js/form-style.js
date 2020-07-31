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
<<<<<<< HEAD
      Focused.classList.remove('input-focused');
      Focused.classList.add('invalid');
    }
    
=======
<<<<<<< HEAD
      Focused.classList.remove('input-focused');
      Focused.classList.add('invalid');
    }
    
=======

      Focused.classList.remove('input-focused');
      Focused.classList.add('invalid');
    }

>>>>>>> 7d376c948b2561213ca73569d9acb3a2126cdd5d
>>>>>>> e0af18c8d4ca4706287935dbf4e470eec8342012
    if (maillEl.value === '') {
      Focused.classList.remove('input-focused');
      Focused.classList.remove('invalid');
    }
  });
});



