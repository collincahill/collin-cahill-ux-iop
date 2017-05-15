window.onload = function() {
  var buttons = document.getElementsByTagName('button');
  console.log(buttons);
  for (var button = 0; button < buttons.length; button++) {

    var profile = buttons[button].parentElement;
    buttons[button].addEventListener('click', toggleProfileDisplay(profile));
  }

  function toggleProfileDisplay(el) {
    var contentToToggle = document.querySelector(el.tagName + ' tbody[aria-hidden]'),
        isDisplaying = contentToToggle.getAttribute('aria-hidden');
    if(isDisplaying) {
      contentToToggle.setAttribute('aria-hidden', 'true');
    } else {
      contentToToggle.setAttribute('aria-hidden', 'false');
    }
  }
};
