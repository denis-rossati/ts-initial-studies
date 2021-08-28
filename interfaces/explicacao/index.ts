// Interfaces parecem um pouco com type:
interface operacoes {
  dinheiroRestante: number,
  saquesRealizados: number,
  ultimoCliente: string,
  retirarDinheiro(n: number): void,
  fazerExtrato(p: string): string,
}

// agora que temos nossa interface, caso a gente relacione ela com algum objeto, ele deverá ter o formato estabelecido:
const caixaEletronico: operacoes = {
  dinheiroRestante: Math.round(Math.random() * 10000),
  saquesRealizados: Math.round(Math.random() * 100),
  ultimoCliente: 'sei la',
  retirarDinheiro: (quantia: number) => {
    console.log('foram removidos', quantia, 'reais da sua conta');
  },
  fazerExtrato: (pessoa: string) => {
    return `${pessoa} tem ${(Math.round(Math.random() * caixaEletronico.dinheiroRestante)).toString()} reais na conta`
  }
}


// nesse caso, mostramos que o objeto realmente deve ter as exatas chaves da interface. Nem mais e nem menos.
const caixaEletronico2: operacoes = {
  dinheiroRestante: Math.round(Math.random() * 10000),
  saquesRealizados: Math.round(Math.random() * 100),
  ultimoCliente: 'sei la',
  retirarDinheiro: (quantia: number) => {
    console.log('foram removidos', quantia, 'reais da sua conta');
  },
  fazerExtrato: (pessoa: string) => {
    return `${pessoa} tem ${(Math.round(Math.random() * caixaEletronico.dinheiroRestante)).toString()} reais na conta`
  },
  falido: false, // -------- X
}