// Arquivo principal para script do temporizador

let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')



play.addEventListener('click', function() {
  buttonPlay.classList.add('hide')

  buttonPause.classList.remove('hide')

})

pause.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')

  buttonPause.classList.add('hide')

})


