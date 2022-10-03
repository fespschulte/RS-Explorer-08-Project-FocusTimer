// Arquivo principal para script do temporizador

// import { resetControls } from "./utils"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown () {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = "00"
    
    if (minutes <= 0) {
      resetControls()
      return
    }

    if( seconds <= 0 ) {
      seconds = 60

      minutesDisplay.textContent = minutes - 1
    }
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")


    countDown()
  }, 1000)

}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')

  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countDown()

})

buttonPause.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')

  buttonPause.classList.add('hide')


})

buttonStop.addEventListener('click', function() {
  resetControls()

})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', function() {
  minutes = prompt('Quantos minutos?')
  updateTimerDisplay(minutes, 0)
})


