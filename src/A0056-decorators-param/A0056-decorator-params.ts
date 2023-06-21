function decorador(
  ClassPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(ClassPrototype);
  console.log(nomeMetodo);
  console.log(index);
}
export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luis', 'Gustavo', 19);
//pessoa.metodo = () => 'EEEEEEIII';
const metodo = pessoa.metodo('ola mundo');
console.log(metodo);
