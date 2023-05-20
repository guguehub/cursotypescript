export class Empresa {
  public readonly nome: string; // public nao necessario
  protected readonly colaboradores: Colaborador[] = []; // private apenas acessivel na classe que foi criado
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111/0001-10');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Luis', 'Gustavo');
const colaborador2 = new Colaborador('joao', 'silva');
const colaborador3 = new Colaborador('marcos', 'paulo');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.popColaborador();
//console.log(empresa1);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);

//empresa1.mostrarColaboradores();
