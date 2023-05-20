// getter e setter - tudo para private

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('Getter chamado');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('nome', 'sobrenome', 10, '000.011.001');

pessoa.cpf = '133232323232';
console.log(pessoa.cpf);
