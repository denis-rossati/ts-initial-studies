// podemos desperdiçar parte do potencial inédito do typescript dizendo às nossas variáveis
let age:any = 5;
age = 'cinco';
// "pode inserir qualquer valor aí"
age = {
  birthYear: 1991,
  currentYear: 2021,
}

age = [2021, '2021', true, { idade: 30 }];

// o mesmo acontece com arrays e objetos

let cadastro: {
  nome: any,
  idade: any,
} = {
  nome: 60,
  idade: 'melão',
};

let arr: any[] = ['alo', true, 56];
