let obj = {}

obj.proprietarios = {}
obj.proprietarios.nome = []
obj.proprietarios.qtdQ =[]
obj.proprietarios.qtdB =[]
obj.proprietarios.garagem=[]



let sair = ""
let opt = 0
do {
  let quantos = obj.proprietarios.nome.length
  let opt = parseFloat(prompt(`Olá! Temos ${quantos} Imóveis cadastrados!\n 1-Salvar novo imóvel.\n 2-Mostrar imóveis salvos. \n 3-Sair do programa`))


  switch(opt){

    case 1:
      obj.proprietarios.nome.push(prompt("digite o nome do proprietário:"));
      obj.proprietarios.qtdQ.push(prompt("digite a quantidade de quartos:"))
      obj.proprietarios.qtdB.push(prompt("digite a quantidade de banheiros"))
      obj.proprietarios.garagem.push(prompt("O imóvel possui garagem? [Sim/Não]"))
      break;

    case 2:
      let continuar = "Não";
      continuar=prompt(Object.values(obj.proprietarios) + "\nContinuar? [Sim]");
      if (continuar == "Sim"){
        break
      }
      ;

    case 3:
      sair="sair";
      break;

    default:
      alert("valor não encontrado")

  }



}while(sair === "")