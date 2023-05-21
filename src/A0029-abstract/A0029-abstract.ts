//classes metodos e atributos abstratos
// para 2 coisas   - ter um TIPO PAR EXTENDER O TIPO CLASSE ABSTRATA
//E GARANTIRA QUE TODAS TENHAM DETERMINADO METODO OU TIPO
// MIGRAR UMA CLASSE PRA SER ABSTRATA
// classe abstract nao pode ser intanciado direta, so por subclasses
export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      ` ${this.emoji} +  ${this.nome} agora tem ${this.vida} de vida...`,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ` AAO ATAAQUEEEE!! `);
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + ` Glooob blooob`);
  }
}

const guerreira = new Guerreira('Guerrera-1', 100, 1000);
const monstro = new Monstro('godzila', 80, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
