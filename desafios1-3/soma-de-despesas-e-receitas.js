let index = 1

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  },
  {
    nome: "Samuel",
    receitas: [10,60,80,900],
    despesas: [80,5,0.5,40]
  }
]
// console.log(usuarios)



function imprimir(usuario) {
  // console.log("imprimir",usuario) //esse aqui mostra alguma coisa no log
  for (let i = 0; i < usuario.length; i++) {


    // console.log("for",usuario)//aqui nao mostra nada no log 


    let Total = calculaSaldo(usuario[i].receitas, usuario[i].despesas)


    //console.log(usuario[i])

    if (Total > 0){
      console.log(`${usuario[i].nome} possui saldo POSITIVO de ${Total}`);
    }  
    if (Total == 0) {
      console.log(`${usuario[i].nome} não possui saldo`);
    }
    if (Total < 0){
      console.log(`${usuario[i].nome} possui saldo NEGATIVO de ${Total}`);
    }

    
  }

  //return console.log("fim da função")
}

function calculaSaldo(receitas, despesas) {
  // console.log("index",index,"receitas:",receitas,"despesas:",despesas)
  const receitasT = somaNumeros(receitas)
  const despesasT = somaNumeros(despesas)
  // console.log("receitas", receitasT)
  // console.log("despesas", despesasT)
  const total = receitasT - despesasT
  // console.log("total",total);

  index++
  
  return total
  
}


function somaNumeros(numeros) {
  // console.log("somas",numeros);
  // Soma todos números dentro do array "numeros"
  let soma = 0

  for ( let i = 0; i < numeros.length; i++ ){

    

    soma = soma + numeros[i]
  }

  return soma
}

imprimir(usuarios)