type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function selecionCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(selecionCor('vermelho', coresObj));
console.log(selecionCor('azul', coresObj));
console.log(selecionCor('roxo', coresObj));
