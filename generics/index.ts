// Generics são uma forma de fazermos com que nossos tipos possam ser genericos :)


// vamos exemplificar assim:

const adicionaLeite = (lista: object) => {
  return { ...lista, leite: true }
}

const listaUm: {pao: boolean, queijo: boolean} = {
  pao: true,
  queijo: false,
}

const listaModificada = adicionaLeite(listaUm);
console.log(listaModificada)

// até aqui tudo bem. Vamos imprimir alguma propriedade da lista:
console.log(listaModificada.pao);

// começou a dar erro... Na verdade, o ts apenas consegue enxergar o leite
// Para contornarmos isso, vamos adicionar um tipo genérico na função:

const adicionaQueijo = <T>(lista: T) => {
  return { ...lista, queijo: true };
}

const listaDois: {pao: boolean, leite: boolean} = {
  pao: true,
  leite: false,
}

const outraListaModificada = adicionaQueijo(listaDois);

console.log(outraListaModificada.pao);

// o erro sumiu... Mas agora temos uma falha na segurança, pois permitimos que o usuaria insira
const maisUmaLista = adicionaQueijo('mamão');

// Isso porque o <T> assume o tipo que for passado. Então diz para o parâmetro "olha, agora você é desse tipo aqui, mesmo que a função não tenha sido feita pra lidar com isso"

// Para contornarmos isso também, podemos ser genéricos, mas mais específicos:

const adicionaPao = <T extends { leite: boolean }>(lista: T) => {
  return { ...lista, pao: true };
}

const listaTres: {leite: boolean, queijo: boolean} = {
  leite: true,
  queijo: false,
}

// agora estamos exigindo que o objeto que passarmos deve ter no mínimo a chave leite com um valor booleano.
const outraaaa = adicionaPao(listaTres);

// veja o erro
const maisUma = adicionaPao('leite');


// Podemos fazer isso com interfaces também, veja a seguir:

interface pessoa <T> {
  nome: string,
  idade: number,
  adicional: T,
}

const eu: pessoa<object> = {
  nome: 'Denis',
  idade: 20,
  adicional: {
    a: 'a',
    b: 2,
    c: true,
  }
}

const tu: pessoa<(string | boolean)[]> = {
  nome: 'Vocẽ',
  idade: 50,
  adicional: ['oii', false],
}

// entretanto, na forma que nosso generic está, não podemos botar chaves adicionais:
const ele: pessoa<{ telefone: number, estado: string }> = {
  nome: 'Ele',
  idade: 25,
  adicional: {
    telefone: 123456789,
    estado: 'Alagoas',
    hobbies: 'aaaaaaaaaaaaaaaaaaaaaa'
  }
}

interface pessoa2 <T extends { telefone: number, estado: string }> {
  nome: string,
  idade: number,
  adicional: T,
  // ? marca a chave como uma propriedade opcional
  optional?: T,
}

const nós: pessoa<{ telefone: number, estado: string }> = {
  nome: 'Ele',
  idade: 25,
  adicional: {
    telefone: 123456789,
    estado: 'Alagoas',
    hobbies: 'aaaaaaaaaaaaaaaaaaaaaa'
  }
}

