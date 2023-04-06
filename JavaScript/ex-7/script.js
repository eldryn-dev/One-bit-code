let lista = ["Matheus","Marcos","Carla"]
let opção = "Continuar"

while (opção == "Continuar"){
  let escolha = window.prompt("Essa é a lista de Pacientes aguardando:\n" + lista +"\nSelecione sua opção: \n 1- Novo paciente \n 2- Consultar paciente \n 3- Sair" )


  //Poderia ter usado Switch() case//
  if(escolha == 1){
    lista.push(window.prompt("Digite o nome do paciente:"))
  } else if (escolha == 2){
    let atendeu = lista.shift()
    alert(atendeu + " foi atendido")
  } else if (escolha == 3){
    opção="Parou"
    alert("Obrigado por utilizar o app.")
  }
  
}