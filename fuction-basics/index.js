// podemos explicitar que uma variavel vai receber um função:
var perimetro;
perimetro = function () {
    console.log(':)'); // V
};
perimetro = 2; // X
// podemos explicitar os tipos dos parametros da função
perimetro = function (lado, base) {
    console.log('(:');
};
// podemos adicionar parametros opcionais:
perimetro = function (lado, base, paramOpcional) {
};
// caso você não passe o parâmetro opcional, ele vira como undefined, por isso podem haver algumas imprevisibilidades com ele.
// Por isso, pode ser mais útil utilizar parâmetros padrões:
perimetro = function (lado, base, paramOpcional) {
    if (paramOpcional === void 0) { paramOpcional = "O resultado é:"; }
    console.log(paramOpcional, lado + base);
};
// Como podemos ver, a função não tem retorno, o que significa que o tipo do resultado dela é "void".
// Isso é totalmente diferente do retorno "undefined", mas quando o ts é compilado, o retorno da função se torna "undefined".
// Vamos mudar isso. Podemos explicitar o valor de uma função. Mas o ts por padrão infere o tipo do retorno da função.
perimetro = function (lado, base, paramOpcional) {
    if (paramOpcional === void 0) { paramOpcional = "O resultado é:"; }
    return paramOpcional + " " + (base + lado);
};
// Assim como o ts vai inferir o tipo de uma variável com base no retorno da execucao da função:
var resultado = perimetro(10, 15);
console.log(resultado)