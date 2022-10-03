// Arquivo principal para script do temporizador

let play = document.querySelector('.play')
let pause = document.querySelector('.pause')

play.addEventListener('click', function() {
  play.classList.add('hide')

  pause.classList.remove('hide')

})

pause.addEventListener('click', function() {
  play.classList.remove('hide')

  pause.classList.add('hide')

})


