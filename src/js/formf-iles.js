$(document).ready(function () {
    $('body').on('change', '.form-file input', function () {
      var curInput = $(this);
      var curField = curInput.parents().filter('.form-file');
      var curForm = curField.parents().filter('form');
      var curName = curInput.val().replace(/.*(\/|\\)/, '');
      var curNameArray = curName.split('.');
      var curExt = curNameArray[curNameArray.length - 1];
      curNameArray.pop();
      var curNameText = curNameArray.join('.');
      if (curNameText.length > 10) {
        curNameText = curNameText.substring(0, 6) + '...' + curNameText.slice(-1);
      }
      curField.find('.form-file-name-text').html(curNameText + '.' + curExt);
      curForm.find('.form-files').append(curForm.data('file'));


    });

    $('body').on('click', '.form-file-name-remove', function () {
      var curField = $(this).parents().filter('.form-file');
      curField.remove();
    });

    function initForm(curForm) {
      if (curForm.find('.form-files').length > 0) {
        curForm.data('file', curForm.find('.form-files').html());
      }
    };

    $('form').each(function () {
      initForm($(this));
    });
  });