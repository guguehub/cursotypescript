export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}
//nos casos abaixo consegue inferir
/*
const pessoa1 = new Pessoa('Luis', 30);
const pessoa2 = new Pessoa(34, 'john');
const pessoa3 = new Pessoa(['luis'], 30);
const pessoa4 = new Pessoa(['luis'], { idade: 30 });
const pessoa5 = new Pessoa<string, number>('luis', 30);
console.log(pessoa5);
*/
//abaixo stack, ou pilha
export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }
  tamanho(): number {
    return this.contador;
  }
  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.push(6);
const elemento1 = pilha.pop();

pilha.mostrarPilha();

while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}

console.log(pilha);
