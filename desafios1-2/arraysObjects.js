/* Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop */

const usuario = {
  nome: "Arnaldo",
  idade: 32,
  tecnologias: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" },
    { nome: "HTML/CSS", especialidade: "Web" }
  ]
  
} 
console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia:`)
/*  ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade},
 ${usuario.tecnologias[1].nome} com especialidade em ${usuario.tecnologias[1].especialidade},
 ${usuario.tecnologias[2].nome} com especialidade em ${usuario.tecnologias[2].especialidade} */

 for (let i = 0; i < usuario.tecnologias.length; i++) {
   console.log(`${usuario.tecnologias[i].nome} com especialidade em ${usuario.tecnologias[i].especialidade},`);
   
   
 }
