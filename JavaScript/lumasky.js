const video = document.querySelector('.video');
video.addEventListener('mouseover', function() {
  video.play();
});
video.addEventListener('mouseout', function() {
  video.pause();
});

function translateToEnglish() {
  var content = document.body.innerHTML;

  var b_traductor = translate(content, "en");

  document.body.innerHTML = b_traductor;
}

function translate(text, targetLanguage) {
  var translate = new google.translate.Translate();

  return translate.translate(text, targetLanguage);
}


const btnsMenu = document.querySelectorAll('#btn-menu a');
btnsMenu.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    const href = btn.getAttribute('href');
    window.location.href = href;
  });
});

var toggleMenu = document.querySelector('.toggle-menu');
var menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', function() {
  menu.classList.toggle('abierto');
});

document.addEventListener('click', function(event) {
  var menu = document.querySelector('#menu');
  var toggleMenu = document.querySelector('.toggle-menu');
  if (!menu.contains(event.target) && !toggleMenu.contains(event.target)) {
  menu.classList.remove('abierto');
  }
});

var videoIframe = document.getElementById("video-iframe");

videoIframe.addEventListener("click", function() {
  videoIframe.width = "1280";
  videoIframe.height = "720";
});

function b_traductor() {
  var currentUrl = window.location.href;
  var googleTranslateUrl = "https://translate.google.com/translate?hl=en&sl=es&tl=en&u=" + encodeURIComponent(currentUrl);
  window.open(googleTranslateUrl, "_blank");
}
