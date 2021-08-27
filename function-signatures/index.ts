// let greet: Function;
// podemos deixar nossas funções mais específicas que isso, e assim, deixar o código mais previsível.

let greet: (name: string, greeting: string) => string;

// Dessa forma, dizemos estritamente que a variável greet receberá uma função que recebe dois argumentos quem devem ter o tipo string
// E também dizemos que a função deve retornar uma string.

greet = (name: string, greeting: string) => {
// vale lembrar que o nome do parametro na tipagem e na declaracao da variavel não precisam ser iguais. Eu poderia colocar "arroz" na tipagem e "batata" na declaração e não daria erro.
  return `${greeting}, ${name}`;
}

// Com objetos a coisa pode ficar um pouco mais feia:

let removeAmigo: (user: {
  nome: string,
  cidade: string,
  bloqueio: boolean,
}) => string;

// nesse caso, as propriedades dos objetos devem ser iguais.
removeAmigo = (user: {
  nome: string,
  cidade: string,
  bloqueio: boolean,
}) => 'amigo removido';

// Para esses casos. Os aliases são uma mão na roda. O mesmo serve para arrays ou quaisquer outras propriedades que você julgue necessário.

type userProperties = {
  nome: string,
  cidade: string,
  bloqueio: boolean,
};

let adicionaAmigo: (
  user: userProperties,
) => string;

adicionaAmigo = (
  user: userProperties,
) => 'amigo adicionado'
