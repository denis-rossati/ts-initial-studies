// os enums são uma forma de associar palavras à numeros
// assim, a necessidade de consultar listas com index ou coisas do tipo, acaba sendo deixada
// meio de lado.
enum actionEnum {deletar, criar, editar};

interface accountTypes {
  uid: number,
  name: string,
  action: actionEnum,
}

const account: accountTypes = {
  uid: 1,
  name: "Zé ninguem",
  action: actionEnum.criar,
}

const account2: accountTypes = {
  uid: 2,
  name: "Maria ninguem",
  action: actionEnum.editar,
}