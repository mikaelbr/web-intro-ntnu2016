var fs = require('fs');
var gest = require('./gest');

setupSlideshow();
setupSoundButton();

document.querySelector('#change-image').addEventListener('click', function (e) {
  e.preventDefault();
  var myImage = document.querySelector('#my-image-1');
  myImage.src = 'assets/dance.gif';
});

var myImage2 = document.querySelector('#my-image-2');
myImage2.addEventListener('click', function (e) {
  e.preventDefault();
  myImage2.src = 'assets/dance.gif';
});

var isStarted = false;
document.querySelector('#gest-button').addEventListener('click', function (e) {
  if (isStarted) {
    gest.stop();
    isStarted = false;
  } else {
    gest.start();
    isStarted = true;
  }
}, false);

var isDebug = false;
document.querySelector('#gest-button-debug').addEventListener('click', function (e) {
  isDebug = !isDebug;
  gest.options.debug(isDebug);
}, false);


function setupSlideshow () {
  var data = fs.readFileSync(__dirname + '/../slides/slides.md', 'utf8');
  document.querySelector('#source').innerHTML = data;

  var slideshow = remark.create({
    ratio: '16:9',
    highlightStyle: 'monokai'
  });

  document.addEventListener('gest', function(gesture) {
    //handle gesture .direction .up .down .left .right .error
    if (gesture.left) {
      slideshow.gotoPreviousSlide();
    } else if (gesture.right) {
      slideshow.gotoNextSlide();
    }
  }, false);
}

function setupSoundButton () {
  var dialupButton = document.querySelector('#sound-button');
  var sound = null;
  dialupButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (sound && sound.paused) {
      return sound.play();
    }
    if (sound && !sound.paused) {
      return sound.pause();
    }
    sound = new Audio('./assets/dial-up-modem-01.mp3');
    sound.play();
  }, false);
}
