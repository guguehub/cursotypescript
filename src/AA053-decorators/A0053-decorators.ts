//como passar parametros para os decorators

interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  //closure
  return function <T extends Constructor>(target: T): T {
    console.log('sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        //this.cor = 'Qualquer coisa';
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }
      inverte(valor: string): string {
        return valor.split('').reverse().join('') + param1 + ' ' + ' ' + param2;
      }
    };
  };
}

function outroDecorador(target: Constructor) {
  console.log('sou o outro decorador');
}

@outroDecorador
@inverteNomeECor('outra coisa', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('sou a classe');
  }
}

const animal = new Animal('luiz', 'roxo');
console.log(animal);
