const main = document.querySelector('.main');
const video = document.querySelector('video');

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: main,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(main)
  .addTo(controller);

let scrollPosition = 0;
let delay = 0;

scene.on('update', function (e) {
  scrollPosition = e.scrollPos / 1000;
});

setInterval(function () {
  delay += (scrollPosition - delay) * 0.1;

  video.currentTime = delay;
}, 100);
