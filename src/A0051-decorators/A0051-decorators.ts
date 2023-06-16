@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
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
      return valor.split('').reverse().join('');
    }
  };
}

//const AnimalDecorated = decorator(Animal);
//const animal = new AnimalDecorated('Luis', 'roxo');
const animal = new Animal('Luis', 'roxo');
console.log(animal);
