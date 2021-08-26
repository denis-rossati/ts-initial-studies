// Quando queremos apenas declarar uma variável sem adicionar um valor, não há forma 
// do typescript adivinhar qual é o seu tipo, então temos que deixar ele claro:
var nome;
nome = 'Denis';
// O typescript pensa:
// Bem, essa variável não tem valor. Mas quando tiver, só poderá ser atribuido se for desse tipo. Qualquer outro está proibido.
// Então nos impede de fazer isso:
nome = 8;
// Isso também é verdade para qualquer outro tipo primitivo:
var sortudo;
sortudo = true;
sortudo = 'não';
// Para arrays, podemos fazer seguindo esse padrão:
var caracteristicas = [];
// Geralmente você já inicial com um array vazio para que tenhamos acesso ao metodo push:
caracteristicas.push(false);
// Note que o typescript apenas irá aceitar strings. Mas e se quisermos um array misturado?
var outrasCaracteristicas = [];
// O | nos indica que os elementos do array podem ser ou uma string ou um booleano, e nada além disso.
// Como podemos tipar uma variável com um objeto?
// Podemos fazer dessa forma:
var pessoa;
// Isso é aceitavel e nos permite fazer isso:
pessoa = {
    nome: "Diego",
    casado: true,
    salario: 2000
};
// Mas também nos permite fazer isso:
pessoa = [];
// Isso porque um array também é do tipo "object". 
// Além diso, essa forma é ruim, pois há um problema de segurança acima. 
// O objeto da forma que está, aceita qualquer chave com qualquer valor. E isso causa uma imprevisibilidade no código.
// Para contornar esses dois inconvenientes,
// deixamos ainda mais explícito quais serão os nomes e tipos de variáveis que esse objeto poderá ter.
var pessoaSegura;
// Qualquer chave a mais ou a menos causará um erro no objeto. Portanto, temos que ser cirurgicos nesse momento.
pessoaSegura = {
    nome: 'Diego',
    casado: true,
    salario: 2000
};
