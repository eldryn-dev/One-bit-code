let velocidade = 80

while (velocidade > 0){
  console.log (`O carro está à ${velocidade} Km/h`)
  velocidade -= 20
  console.log ("Diminuindo 20 Km/h")

  if (velocidade === 40){
    break
  }
}

console.log ("O carro parou!")