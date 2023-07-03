const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.pause')
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
  
    updateTimerDisplay(minutes, 0)
    
    if(minutes <= 0){
      return
    }

    if(seconds <= 0) {
      seconds = 10

      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click',function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  stopClock()
})


/* 
seleçaõ de botão de som
const menuItems = document.querySelectorAll('.sound__item')
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
}
 */

/* function moreTime (){

}

function lessTime(){

} */