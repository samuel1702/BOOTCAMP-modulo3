//  criar um programa calcular media das notas 
//  entre alunos e envia mensagem da média
const alunosDaTurmaA = [
  {
    nome: "Samuel",
    nota: 10
  },
  {
    nome: "felipe",
    nota: 10
  },
  {
    nome: "fulano",
    nota: 10
  }
]

const alunosDaTurmaB = [
  {
    nome: "rogerio",
    nota: 8
  },
  {
    nome: "siclano",
    nota: 9
  },
  {
    nome: "fulano2",
    nota: 4
  },
  {
    nome: "Novo Aluno",
    nota: 5
  }

]

function calculaMedia(alunos){
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
    
  }
  const mediaT = soma / alunos.length
  return mediaT
  
  //return (alunos[0].note + alunos[1].note + alunos[2].note) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

imprime(media1, 'turmaA',alunosDaTurmaA.length)
imprime(media2, 'turmaB',alunosDaTurmaB.length)



function imprime(media,turma,numeroDeAlunos){
  console.log(`${turma} com ${numeroDeAlunos} alunos:`);
  
  if (media > 5) {
    console.log(`A media da ${turma} foi de ${media} | Parabéns`);

  } else {
    console.log(`a média da ${turma} é menor que 5:${media}`);
    
  }
}
