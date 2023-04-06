
const nome = prompt("Digite seu nome:")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while(continuar === "Sim"){
  let cidade = prompt("Qual o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar= prompt ("Você visitou alguma outra cidade? (Sim/Não)") 
}

alert(`${nome}. Você visitou ${contagem} cidades! \n E foram: \n${cidades}`)