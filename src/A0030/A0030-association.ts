export class Escritor {
  //ferramenta privada setter do tipo ferramenta, ou pode ser null
  private _ferramenta: Ferramenta | null = null;

  constructor(private nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('nulo - nao posso escrever sem ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}
//criacao da ferramenta

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  //precisa metodo abstrato sem corpo  que poderá ser extendida
  abstract escrever(): void;
  // get nome para saber o nome da ferramenta
  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome}  está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome}  está DIGITANDO..`);
  }
}

const escritor = new Escritor('Freud');
const caneta = new Caneta('bic');
const maquinaEscrever = new MaquinaEscrever('Maquina');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);
escritor.ferramenta = maquinaEscrever;

escritor.escrever();
