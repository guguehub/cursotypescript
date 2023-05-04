/* eslint-disable */
//tipos basicos (aqui ocorre inferencia de tipos)
let nome: string = 'Luiz';  // qualquer tipo de string
let idade: number = 30; // inteiro, float, negativo, hexa e chaves
let adulto: bolean = true;  // true or false
let simbolo: symbol = Symbol('qualquer simbolo');
let big: bigint = 10n; //bigint

//Arrays
let numbersArray: Array<number> = [1, 2, 3];
let numbersArray2: number[] = [1, 2, 3];
let stringsArray: Array<string> = ['a', 'b', 'c'];
let stringsArray2: string[] = ['a', 'b', 'c'];

//Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luis'

};


// funções
function soma(x: number ,y: number): number {
return x + y;
}
const soma2: (x: number, y: number) => number = (x,y) => x+y;
