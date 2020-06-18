//  criar um programa calcular media das notas 
//  entre alunos e envia mensagem da média
const alunosDaTurmaA = [
  {
    nome: "Samuel",
    note: 10
  },
  {
    nome: "felipe",
    note: 10
  },
  {
    nome: "fulano",
    note: 10
  }
]

const alunosDaTurmaB = [
  {
    nome: "rogerio",
    note: 8
  },
  {
    nome: "siclano",
    note: 9
  },
  {
    nome: "fulano2",
    note: 4
  }
]

function calculaMedia(alunos){
  return (alunos[0].note + alunos[1].note + alunos[2].note) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

imprime(media1, 'turmaA')
imprime(media2, 'turmaB')



function imprime(media,turma){
  if (media > 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabéns`);
    
    
  } else {
    console.log(`a média da ${turma} é menor que 5`);
    
  }
}
