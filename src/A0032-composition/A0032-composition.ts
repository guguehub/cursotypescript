//composicao um objeto tem outro como parte dele
//  uma classe vai fazer parte da outra, e nao existe sem a outra
export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    //console.log('motor esta ligado...');
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('motor esta ligado...');
  }
  acelerar(): void {
    console.log('motor esta ACELERANDO...');
  }
  parar(): void {
    console.log('motor esta PARANDO...');
  }
  desligar(): void {
    console.log('motor está desligando..');
  }
}

const carro = new Carro();

console.log(carro);
//carro.motor.acelerar();  (nao aconselhavel esse trem de carga.)

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
