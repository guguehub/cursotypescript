//implementar tipos no typescript,
// criar familia de classes, e para classe que herdar determinadas coisas

//depois type alias: em vez de ABSTRACT CLASS. USAR TYPE e nao se usa PROTECTED
// tipos nao EXTEND, MAS IMPLEMENTS
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto: () => string;
};

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('luis', 'Gustavo');
console.log(pessoa.nomeCompleto());
