//primeira forma de tipagem
//const arrayNumeros: number[] = [1, 2, 3, 4, 5];

type MeuTipo = number;
//segunda forma com tipo generico
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];

async function promiseAsync() {
  return 1;
}
promiseAsync().then((resultado) => console.log(resultado + 1));
//console.log(arrayNumeros);
// promises tambem sao genericas

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
