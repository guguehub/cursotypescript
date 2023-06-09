// metodos estaticos,

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('marcos', 'paulo', 10, '000.011.001');
const pessoa3 = new Pessoa('aztec', 'mariachi', 50, '00202.050.200');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
