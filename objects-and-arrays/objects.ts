let cadastro = {
  nome: 'Vanessa',
  idade: 65,
  aposentadoria: true,
};

// As chaves de um objeto funcionam como variáveis, assim como o objeto em si
// Assim, não podemos utilizar diferentes tipos dentro dessas variáveis. Nem mesmo mudar o próprio objeto.
cadastro.nome = true;

cadastro.aposentadoria = 'falso';

cadastro = [];

// Entretanto, podemos mudar as propriedades desde que elas mantenham seu tipo
// Mesmo que isso signifique mudar todo o objeto:
cadastro.nome = 'Isadora';
cadastro.idade = 19;
cadastro.aposentadoria = false;

// Também não podemos adicionar propriedades, pois modificariam o objeto original:
cadastro.salario = 1300;

// Uma das formas dificeis de clonar um objeto adicionando propriedades poderia ser assim:
const outroCadastro = Object.keys(cadastro).reduce((acc, key) => {
  acc[key] = cadastro[key];
  return acc;
}, {
  salario: 1000,
});

// mas também podemos fazer isso:
const maisUmCadastro = {
  ...cadastro,
  salario: 3500,
}

// Podemos reescrever um objeto inteiramente também, assim:
cadastro = {
  nome: 'Roberto',
  idade: 120,
  aposentadoria: false,
}

// Mas se ousarmos adicionar uma propriedade, a casa cai:
cadastro = {
  nome: 'Roberto',
  idade: 120,
  aposentadoria: false,
  salario: 900,
}
