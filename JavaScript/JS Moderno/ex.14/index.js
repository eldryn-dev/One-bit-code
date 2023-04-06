let num = 0
let numbers = []


function mediaArit (n, d) {
  let allSum = 0
  d = n.lenght
  n.reduce((total, number) =>{  
    allSum = total + number
    return allSum
  }, 0 ) 
  return allSum / d
}

function mediaPond (nList) {
  nList.forEach(element => {
    nList.pop()
  });
  let continuar = "sim"
  let totalP = 0 
  do {
    let n = parseFloat(prompt('Digite o número:'))
    let p = parseFloat(prompt('Digite o peso:'))
    let nP= n*p

    totalP += p 
    nList.push(nP)
    
    continuar = prompt('Deseja continuar? [sim/não]')
  }while (continuar == "sim")
  alert(mediaArit(nList, totalP))
}

function menu(){
  do {
    opt = prompt(`1 - Digitar um número
2 - Calcular a média aritimética
3 - Calcular a média ponderada
4 - Sair
      `)
    switch (opt){
      case "1" :
      numbers.push(parseFloat(prompt('Digite um número')))
      console.log(numbers)
      break;

      case "2" :
      alert(mediaArit(numbers))
      break;

      case "3":
      mediaPond(numbers)
      break;

      case "4" :
      alert ('Obrigado!')
      break;
    }
  }while (opt !== "4")

}

menu()