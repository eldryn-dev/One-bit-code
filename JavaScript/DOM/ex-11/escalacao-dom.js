escalacao = []

function naLista(){
  const lista = document.getElementById("main")
  let novoJogador = document.createElement('li')
  

  escalacao.forEach(element => {
    novoJogador.innerText = element.camisa + "-" + element.nome + " -- " + element.posicao
    lista.appendChild(novoJogador)    
  });


}

function addPlayer(){
const n = document.getElementById("nome")
const p = document.getElementById("posi")
const c = document.getElementById("cami")

let checker = confirm(`Confirmar escalação de ${n.value} na posição de ${p.value} e com a camisa ${c.value}?`)

let nome = n.value
let posicao = p.value
let camisa = c.value
if (checker === true){
  
  dadosJogador = {nome, posicao, camisa}
  escalacao.push(dadosJogador)
  alert("Escalação realizada!")
}

n.value = ""
p.value = ""
c.value = ""

}

function remover(){
  let excluido = document.getElementById("rem")
  //console.log(excluido.value)//
  console.log(escalacao[0])
  let checker = confirm("Deseja remover o jogador" + excluido + " ?")

  if (checker === true){
    escalacao.forEach(jogador => {
      if (jogador.camisa == excluido.value){
        const indice = escalacao.indexOf(jogador)
        console.log(indice)
        escalacao.splice(indice,1)
      }
      console.log(escalacao)
    });
  }

  excluido.value = ""
}