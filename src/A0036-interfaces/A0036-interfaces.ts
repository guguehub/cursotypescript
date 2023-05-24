interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: readonly string[];
}

interface Pessoa {
  readonly endereco: readonly string[];
}
interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'luis',
  sobrenome: 'gustavo',
  endereco: ['av. brasil'],
};

//pessoa.sobrenome = 'marz';

//pessoa.endereco.push('complemento-casa');

console.log(pessoa);
