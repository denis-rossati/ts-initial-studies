// com tuples, podemos explicitar o exato tipo no exato index que queremos em um array
let arrUm = [true, 'oi', 55];

// podemos mudar as propriedades desse array de acordo com nossa vontade:
arrUm.push(5);
arrUm[4] = 'iae';
arrUm[1] = false;

// com o tuple, nós cortamos essa liberdade:

let arrDois: [string, boolean, number] = ['alo', true, 55];

arrDois[0] = true; // ----- X
arrDois[1] = 3;
arrDois[2] = 'olá';
// isso nos dá uma segurança maior quando usamos spread, por exemplo:

const giveMeArgs = (a: number, b: number, c: string) => {
  return 0;
}

const arrayArgs = [5, 6, '7'];

// isso dá erro.
giveMeArgs(...arrayArgs);

// mas isso não:

let arrArgs: [number, number, string] = [5, 6, '7'];
giveMeArgs(...arrArgs);
