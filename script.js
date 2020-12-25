const main = document.querySelector('.main');
const video = document.querySelector('video');
const button = document.querySelector('button');

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

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

recognition.onresult = function (e) {
  let transcript = e.results[0][0].transcript;
  getResponse(transcript);
};

recognition.onspeechend = function () {
  recognition.stop();
};

button.addEventListener('click', function () {
  recognition.start();
});

const getResponse = transcript => {
  const response = new SpeechSynthesisUtterance();
  response.text = 'ho ho ho';
  response.volume = 1;

  if (transcript.includes('Merry Christmas')) {
    response.text = 'Merry Christmas to you too baby.';
  }

  window.speechSynthesis.speak(response);
};
