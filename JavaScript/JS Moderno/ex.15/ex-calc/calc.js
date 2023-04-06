const operacao = document.getElementById('operacao')
const btns = document.querySelectorAll('.charKey')

const equal = document.getElementById('equal')
const clear = document.getElementById('clear')

import resultado from "./calculate.js"

equal.addEventListener('click', function(){
  console.log(operacao.value)
  operacao.value = resultado(operacao.value)
})

clear.addEventListener('click', function(){
  operacao.value = 0
})


btns.forEach(element => {
  element.addEventListener('click', function(){
    const keyPressed = element.dataset.value
    operacao.value += keyPressed
  })
});


const interruptor = document.getElementById('tema')
// Botão do Tema //
interruptor.addEventListener('click', function (){
  const bodyBg = document.querySelectorAll('button')


  bodyBg.forEach(element => {
    element.classList.toggle('darkMode')
  });
})
