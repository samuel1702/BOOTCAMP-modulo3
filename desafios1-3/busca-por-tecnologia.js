const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
  { nome: "Samuel", tecnologias:["HTML","CSS","Node.js"]}
];



function imprime(usuario){
  for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
    }
  }
}

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
  for(i = 0; i < usuario.tecnologias.length ; i++){
  if(usuario.tecnologias[i] == "CSS")
    return true
  }

  return false 
}

imprime(usuarios)

