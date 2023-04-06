function operacao (a, b, op){
  const result = op(a, b)
  return result
}
function somar (a, b) {
  console.log("Realizando uma soma.")
  return a + b
}

console.log (operacao(1,2,somar))

console.log (operacao(8, 2, function (x,y){
  console.log ("Realizando uma subtração.")
  return x - y
}))

function exibirElemento (elemento, indice , array){
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++){
  exibirElemento(lista[i], i , lista)
}

lista.forEach(exibirElemento)