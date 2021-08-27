// As vezes declarar tipos pode ser uma tarefa feia e repetitiva em alguns casos:

let cadastrarUsuario = (
  usuario: {
    nome: string,
    idade: number | string,
    casaPropria: boolean,
    // etc...
  },
) => {
  // ...
}

let removerUsuario = (
  usuario: {
    nome: string,
    idade: number | string,
    casaPropria: boolean,
  }
) => {
  // ...
}

// Para isso existem o aliases. É como se guardássemos as declarações dos tipos dentro de variáveis:

type strOuNbr = string | number;

type tipoObjUsuario = {
  nome: string,
  // podemos usar um type dentro de outro type
  idade: strOuNbr,
  casaPropria: boolean,
}

cadastrarUsuario = (
  usuario: tipoObjUsuario,
) => {
  // ...
}

removerUsuario = (
  usuario: tipoObjUsuario,
) => {
  // ...
}
