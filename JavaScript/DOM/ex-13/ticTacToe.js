const register = document.querySelector('div#reg')

const tabuleiro = document.querySelectorAll('div#cell')

const botoes = document.querySelectorAll('button.btn')
let play1 = []
let play2 = []
const players = []
const game = false

const restart = document.getElementById('reinicio')
const restartBtn = document.getElementById('restart')

const btnReg = document.getElementById('nameReg')
btnReg.addEventListener('click',reg)

restartBtn.addEventListener('click' , restartGame)

const winCon1 = ['b11','b12','b13'] //linha 1
const winCon2 = ['b21','b22','b23'] //linha 2
const winCon3 = ['b31','b32','b33'] //linha 3
const winCon4 = ['b11','b21','b31'] //coluna 1
const winCon5 = ['b12','b22','b32'] //coluna 2
const winCon6 = ['b13','b23','b33'] //coluna 3
const winCon7 = ['b11','b22','b33'] //diagonal 1
const winCon8 = ['b13','b22','b31'] //diagonal 2

const allWinCons =[]
allWinCons.push(winCon1, winCon2, winCon3, winCon4, winCon5, winCon6, winCon7 , winCon8)

let c = 0 // Verificador de acertos, completando 3 na mesma linha o jogador ganha //

let player = play1
let sym = "X"

function reg (){
  const p1 = document.getElementById('nameP1').value
  const p2 = document.getElementById('nameP2').value  

  players.push(p1,p2)
  alert (`O Jogador Azul é ${p1} e o Jogador vermelho é ${p2}!\n Fechando Área de Registro...`)
  register.style.display = 'none'
  console.log(players)
  startGame()
}

function startGame(){
  botoes.forEach(botao => {
    botao.addEventListener('click',handleBoardClick)    
  })
}

function handleBoardClick(ev) {
  const pressed = ev.currentTarget
  if (play1.length <= play2.length){
    turn(player, sym, pressed)
    pressed.removeEventListener('click', handleBoardClick)  
  } else {
    turn(play2, "O", pressed)
    pressed.removeEventListener('click', handleBoardClick) 
  }

}

function turn(player,sym,pressed){
  console.log(player)
  player.push(pressed.id)
  console.log(pressed.id)
  let marca = document.createElement('p')
  marca.innerText = sym
  pressed.appendChild(marca) 
  verify(player)
}

function verify (player){
  if (play1.length + play2.length === 9){
    alert('Deu Velha! :C')
    restart.style.display = 'flex'

  }
  allWinCons.forEach(winCon => {
    c = 0 
    winCon.forEach(element => {
      if (player.includes(element)){
        c++  
      }
      if (c === 3) {
        if (player == play1){
          alert( players[0] + ' Ganhou!')
          restart.style.display = 'flex'
        }else if (player == play2){
          alert( players[1] + ' Ganhou!')
          restart.style.display = 'flex'
        }
      }
    })
  });
}

function restartGame(){
  botoes.forEach(botao => {
    botao.innerText = "" 
    play1.pop()
    play2.pop()
    console.log(play1)
    console.log(play2)   
  })

  startGame()
}


