const anosAteAposentadoria = (idade) => {
  return 65 - idade;
}
// Isso não nos dá nenhum tipo de erro, porque não explicitamos o tipo da variável "idade".
console.log(anosAteAposentadoria('13'));

const calculaTempoParaAposentadoria = (idade: number) => {
  return 65 - idade;
}
// Isso aqui já dá merda
// console.log(calculaTempoParaAposentadoria("13"));

// É assim que explicitamos os tipos para nossos parâmetros.
// O que não daria erro, seria:
console.log(13);