<<<<<<< HEAD
// var im = new Inputmask();
// im.mask(inputMask)
=======
<<<<<<< HEAD
// var im = new Inputmask();
// im.mask(inputMask)

// Inputmask({
//    "mask": "+7 999 999 99-99",
//     showMaskOnHover: false,
//     autoUnmask: false,
//   }).mask(inputMask);

inputMask.addEventListener('blur', function (e) {
  let foc = e.target.closest('.input');
  if (inputMask.value.length <= 15) {
    foc.classList.remove('input-focused')
    foc.classList.add('invalid');
  }

  if (!inputMask.value.length) {
    foc.classList.remove('input-focused')
    foc.classList.remove('invalid')
  }
});

=======
inputMask.addEventListener('focus', function (e) {
  let foc = e.target.closest('.input');
  foc.classList.remove('input-focused')
  foc.classList.add('invalid');

  if (inputMask.value.length >= 14) {
    foc.classList.add('input-focused')
    foc.classList.remove('invalid');
  }
>>>>>>> e0af18c8d4ca4706287935dbf4e470eec8342012

// Inputmask({
//    "mask": "+7 999 999 99-99",
//     showMaskOnHover: false,
//     autoUnmask: false,
//   }).mask(inputMask);

inputMask.addEventListener('blur', function (e) {
  let foc = e.target.closest('.input');
  if (inputMask.value.length <= 15) {
    foc.classList.remove('input-focused')
    foc.classList.add('invalid');
  }

  if (!inputMask.value.length) {
    foc.classList.remove('input-focused')
    foc.classList.remove('invalid')
  }
});

<<<<<<< HEAD
=======
// tel mask
>>>>>>> 7d376c948b2561213ca73569d9acb3a2126cdd5d
>>>>>>> e0af18c8d4ca4706287935dbf4e470eec8342012
inputMask.addEventListener('keydown', function (event) {
  if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
    event.preventDefault()
  }
  let mask = '+7 111 111-11-11';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  let foc = event.target.closest('.input');

  foc.classList.remove('input-focused')
  foc.classList.add('invalid');

  if (inputMask.value.length >= 14) {
    foc.classList.add('input-focused')
    foc.classList.remove('invalid');
  }
>>>>>>> 7d376c948b2561213ca73569d9acb3a2126cdd5d
>>>>>>> e0af18c8d4ca4706287935dbf4e470eec8342012

  if (/[0-9\+\ \-\(\)]/.test(event.key)) {
    let currentString = this.value;
    let currentLength = currentString.length;
    if (/[0-9]/.test(event.key)) {
      if (mask[currentLength] == '1') {
        this.value = currentString + event.key;
      } else {
        for (var i = currentLength; i < mask.length; i++) {
          if (mask[i] == '1') {
            this.value = currentString + event.key;
            break;
          }
          currentString += mask[i];
        }
      }
    }
  }
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> 7d376c948b2561213ca73569d9acb3a2126cdd5d
>>>>>>> e0af18c8d4ca4706287935dbf4e470eec8342012
