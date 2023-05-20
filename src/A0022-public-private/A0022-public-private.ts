export class Empresa {
  public readonly nome: string; // public nao necessario
  private readonly colaboradores: Colaborador[] = []; // private apenas acessivel na classe que foi criado
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111/0001-10');
const colaborador1 = new Colaborador('Luis', 'Gustavo');
const colaborador2 = new Colaborador('joao', 'silva');
const colaborador3 = new Colaborador('marcos', 'paulo');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
//console.log(empresa1);
// empresa1.nome = 'facebook';
console.log(empresa1.getNome());

//empresa1.mostrarColaboradores();
