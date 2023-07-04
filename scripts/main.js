const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.more-time')
const buttonLessTIme = document.querySelector('.less-time')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function stopClock() {
  clearTimeout(timerTimeOut)
}

function countdown(){
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if(minutes <= 0  && seconds <= 0){
      return
    }

    if(seconds <= 0) {
      seconds = 10
      --minutes
    } else {
      seconds--
    }

    updateTimerDisplay(minutes, seconds)

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click',function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  stopClock()
})

function addFiveMinutes(){
  minutes += 5
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

buttonMoreTime.addEventListener('click', function(){
  addFiveMinutes()
})

function removeFiveMinutes(){
  minutes -= 5
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

buttonLessTIme.addEventListener('click', function(){
  removeFiveMinutes()
})


/* const menuItems = document.querySelectorAll('.sound__item')
let menuItemActive = document.querySelector('.sound--active')

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', buttonClick)
}

function buttonClick() {
  if (!this.classList.contains('sound--active')) {
    menuItemActive.classList.remove('sound--active')
    this.classList.add('sound--active')

    menuItemActive = this
  }
} */

 
const buttonForest = document.getElementById('forest');
const audioForest = new Audio('./sounds/Floresta.wav');
const buttonRain = document.getElementById('rain');
const audioRain = new Audio('./sounds/Chuva.wav');
const buttonCoffee = document.getElementById('coffee');
const audioCoffee = new Audio('./sounds/Cafeteria.wav');
const buttonFire = document.getElementById('fire');
const audioFire = new Audio('./sounds/Lareira.wav');
let isPlaying = false;

buttonForest.addEventListener('click', function() {
  if (isPlaying) {
    // Stop the music
    audioForest.pause();
    isPlaying = false;
    buttonForest.style.backgroundColor = '';
  } else {
    // Play the music
    audioForest.play();
    isPlaying = true;
    buttonForest.style.backgroundColor = '#02799d';
  }
});


buttonRain.addEventListener('click', function() {
  if (isPlaying) {
    // Stop the music
    audioRain.pause();
    isPlaying = false;
    buttonRain.style.backgroundColor = '';
  } else {
    // Play the music
    audioRain.play();
    isPlaying = true;
    buttonRain.style.backgroundColor = '#02799d';
  }
});

buttonCoffee.addEventListener('click', function() {
  if (isPlaying) {
    // Stop the music
    audioCoffee.pause();
    isPlaying = false;
    buttonCoffee.style.backgroundColor = '';
  } else {
    // Play the music
    audioCoffee.play();
    isPlaying = true;
    buttonCoffee.style.backgroundColor = '#02799d';
  }
});

buttonFire.addEventListener('click', function() {
  if (isPlaying) {
    // Stop the music
    audioFire.pause();
    isPlaying = false;
    buttonFire.style.backgroundColor = '';
  } else {
    // Play the music
    audioFire.play();
    isPlaying = true;
    buttonFire.style.backgroundColor = '#02799d';
  }
});