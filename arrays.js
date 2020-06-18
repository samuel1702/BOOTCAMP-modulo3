//  criar um programa calcular media das notas 
//  entre alunos e envia mensagem da média
const alunos = [
  {
    nome: "Samuel",
    note: 7.6
  },
  {
    nome: "felipe",
    note: 10
  },
  {
    nome: "fulano",
    note: 2.4
  }
]


const media = (alunos[0].note + alunos[1].note + alunos[2].note) / 3

console.log(media);
