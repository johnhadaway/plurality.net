window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('scrollPosition', document.querySelector('#main-col').scrollTop);
});

window.addEventListener('load', function () {
  document.querySelector("#main-col").scrollTop = sessionStorage.getItem('scrollPosition');
});