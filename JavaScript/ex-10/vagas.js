const vagas=[]
const vaga={}

function exibirMenu(){
  let opt = prompt("1-Listar vagas disponíveis."+
  "\n2-Criar uma nova vaga."+
  "\n3-Visualizar uma vaga."+
  "\n4-Inscrever um candidato em uma vaga."+
  "\n5-Excluir uma vaga."+
  "\n6-Sair")
  return opt
}

function listarVagas(){
  const listadeVagas = vagas.reduce(function(start,item,indice){
    start += (indice) + ". "
    start += item.nome 
    start += ` - ${item.candidatos.lenght} \n`
    return start 
  },"")
  alert(listadeVagas)
  };

function novaVaga(){
  const nome = prompt("Digite o nome da vaga:");
  const descricao = prompt("Descreva a vaga:");
  const dataLimite = prompt("Data limite:");
  const candidatos = []
  let checker = confirm("Deseja salvar esta vaga?\n" + nome + "\n" + descricao + "\n" + dataLimite)
  if (checker == true){
    const newv = {nome, descricao, dataLimite, candidatos:[] }
    alert(`Vaga ${newv.nome} criada!`) 
    return newv
  }else {
    alert("Vaga não salva")
  }
}

function inscrever(){
  const candidato = prompt("Qual o nome do cadidato:")
  const qualVaga = prompt("Qual é o indice da vaga?\n" + listarVagas())
  const add = confirm(`Adicionar o candidato ${candidato} à lista da vaga para ${vagas[qualVaga].nome}`)
  if (add == true) {
    vagas[qualVaga].candidatos.push(candidato)
    alert('Candidato adicionado com sucesso!')
  }
}

function exibirVaga(){
  listarVagas()
  var opt = prompt ('Qual vaga deseja exibir?')
  alert("Vaga para " + vagas[opt].nome + "\nDescrição:\n" + vagas[opt].descricao + "\nData limite: " + vagas[opt].dataLimite + "\nNúmero de candidatos inscritos: " + vagas[opt].candidatos.length)
}

function excluirVaga(){
  
  const del = prompt("Qual vaga deseja excluir:")
  const confirmDelete = confirm(`Deseja realmente excluir a vaga para ${vagas[del].nome} ?`)
  if (confirmDelete == true){
    alert ('Vaga excluída com sucesso!')
    vagas.splice(del,1)
  }
}

do {
  opt = '0'
  opt = (exibirMenu()) 
  switch (opt){
    case '1':
      listarVagas();
      break;
    case '2':
      vagas.push(novaVaga());
      break;
    case '3':
      exibirVaga();
      break;
    case '4':
      inscrever()
      break;
    case '5':
      excluirVaga();
      break;      
    case '6':
      alert("Obrigado!");
      break;
  }
 
}while(opt !== '6')