// modificadores de acesso da classe
// + public  -private  #protected
// quando esta private usar getter

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('fazendo algo antes,test');
    const result = super.getNomeCompleto();
    return result + 'heey';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente';
  }
}

const aluno = new Aluno('luiz', 'Gustavo', 44, '000.001010-00', '01');
const cliente = new Cliente('zeca', 'jones', 34, '00000.0000-11');
const pessoa = new Pessoa('nome', 'sobrenome', 10, 'cpf', 'sala');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
