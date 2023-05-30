//primeira forma de tipagem
//const arrayNumeros: number[] = [1, 2, 3, 4, 5];

//segunda forma com tipo generico
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];

console.log(arrayNumeros);
// promises tambem sao genericas

async function promiseAsync() {
  return 1;
}

promiseAsync().then((resultado) => console.log(resultado + 1));
