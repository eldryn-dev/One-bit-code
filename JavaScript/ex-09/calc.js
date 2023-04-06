
//Menu//

function exibirMenu () {
  return prompt("Deseja calcular a área de qual forma?"+
  "\n1-Triângulo"+
  "\n2-Retângulo"+
  "\n3-Quadrado"+
  "\n4-Trapézio"+
  "\n5-Círculo"+
  "\n6-Sair")
}

do{
  let forma = ""
  forma = exibirMenu()
  switch(forma){
    case "1":
      let bt = Number.parseFloat(prompt("Qual o valor da base:"))
      let at = Number.parseFloat(prompt("Qual o valor da altura"))
      let rest = areaTriangulo(bt, at)
      alert(rest)
      break;  
    case "2":
      let br = Number.parseFloat(prompt("Qual o valor da base:"))
      let ar = Number.parseFloat(prompt("Qual o valor da altura"))
      let resr = areaRetangulo(br, ar);
      alert(resr);    
      break;  
    case "3":
      let l = Number.parseFloat(prompt("Qual é o valor de um lado:"))
      let resq = areaQuadrado(l)
      alert (resq)
      break;  
    case "4":
      let bmaTr = Number.parseFloat(prompt("Qual o valor da base maior:"))
      let bmeTr = Number.parseFloat(prompt("Qual o valor da base menor"))
      let aT = Number.parseFloat(prompt("Qual é o valor da altura:"))
      let resTr = areaTrapezio(bmaTr, bmeTr , aT);
      alert(resTr);    
      break;
    case "5":
      let r = Number.parseFloat(prompt("Qual é o valor do raio:"))
      let resC= areaCirculo(r)
      alert(resC)
      break;   
    case "6":
      alert("Obrigado!")
      break;
  }

} while (forma !== "6")



//Funções//

function areaTriangulo(base , altura) {
  return base * altura / 2
}

function areaRetangulo(base, altura) {
  return base * altura
}

function areaQuadrado(lado){
  return lado**2
}

function areaTrapezio(baseMaior,baseMenor,altura){
  return ((baseMaior + baseMenor) * altura / 2)
}

function areaCirculo (raio){
  return 3.14 * raio**2
}