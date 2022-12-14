// Arquivo principal para script do temporizador

import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {   
  buttonDarkMode,
  buttonWhiteMode,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay, 
  bodyBackground
  } from "./elements.js"


const controls = Controls ({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

buttonDarkMode.addEventListener('click', function() {
  buttonDarkMode.classList.add('hide')
  buttonWhiteMode.classList.remove('hide')
  bodyBackground.classList.add('togglemode')
})

buttonWhiteMode.addEventListener('click', function() {
  buttonDarkMode.classList.remove('hide')
  buttonWhiteMode.classList.add('hide')
  bodyBackground.classList.remove('togglemode')
})

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown()
  sound.pressButton()

})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.pause()
})

buttonSet.addEventListener('click', function() {
  sound.pressButton()
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})



