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

inputMask.addEventListener('keydown', function (event) {
  if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
    event.preventDefault()
  }
  let mask = '+7 111 111-11-11';

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
});
