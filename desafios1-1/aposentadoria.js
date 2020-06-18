const nome = "angelino";
const sexo = "M";
const idade = 65;
const contribuicao = 40;

if (sexo == "M" || sexo == "m"){
  if (contribuicao + idade > 95) {
    console.log(`${nome}, pode se aposentar`);
        
  } else {
    console.log(`${nome},não pode se aposentar`);
  }

} else {
  if (contribuicao + idade > 85) {
    console.log(`${nome}, pode se aposentar`);
        
  } else {
    console.log(`${nome},não pode se aposentar`);
  }
}