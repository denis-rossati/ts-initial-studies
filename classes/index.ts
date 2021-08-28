class Payment {
  // Quando lidamos com classes, queremos tipar nossas variáveis logo no início do documento.
  _name: string;
  _age: number;
  _paybill: number;
  _test: boolean;
  
  constructor(n: string, a: number, p: number) {
    // logo, tudo isso é permitido
    this._name = n;
    this._age = a;
    this._paybill = p;

    // mas isso não:
    // this._test = 30;
  }

  owes() {
    return `${this._name}, ${this._age} years old, owes the amount of ${this._paybill} dollars.`
  }
}

const firstObj = new Payment('Juninho', 12, 500000);

const secondObj = new Payment('Zezinho', 40, 1);

console.log(firstObj.owes());

console.log(secondObj.owes());

// Existe também, uma forma de explicitarmos que um array apenas pode receber elementos de uma certa classe:

const arr: Payment[] = [];

// arr.push(15); --- X
// arr.push('qualquercoisa') --- X

arr.push(firstObj);
arr.push(secondObj);

console.log(arr);

// no jeito que nossa classe está, podemos mudar suas propriedades como bem entendermos:

firstObj._age = 8301951;
secondObj._name = 'Gabigol'

// Se quisermos modificar a forma como acessamos nossa classe, podemos public, private e readonly, que no ts fica assim:
class Login {
  public _name: string;
  readonly _email: string;
  private _password: string;

  constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  mostrarInformacoes() {
    return `
    nome: ${this._name},
    login: ${this._email},
    senha: ${this._password}
    `
  }

  mudarReadOnly() {
    this._email = 'oiii';
  }

  mudarPrivate() {
    this._password = 'aaaaaaaaaaa'
  }
}

const loginOne = new Login('denis', 'x@.com', 'aaaaaaaaa');

console.log('antes das alterações:', loginOne);
// o public permite que a gente leia e altere as informações da classe como quisermos:
loginOne._name = "Luisa";
console.log(loginOne);

// o readonly permite que a gente leia a propriedade de uma classe, mas não permite que a gente modifique fora do construtor, como visto na linha 69 (nice, btw)
console.log(loginOne._email);

// por fim, o private não deixa a gente ler a propriedade fora da classe:

console.log(loginOne._password); // o erro indica que não podemos ler esse atributo

// existe o seguinte truque também: podemos definir o access modifier direto no parâmetro do construtor:

class Person {
  constructor(
    readonly _name: string,
    public _state: string,
    private _cpf: number,
  ) {}

  // A partir daqui, já podemos usar essas propriedades em outros métodos:

  showInfo() {
    return `${this._name} ----- ${this._state} ----- ${this._cpf}`
  }

  // pessoalmente, prefiro o outro jeito :v
}
