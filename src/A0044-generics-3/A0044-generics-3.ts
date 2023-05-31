interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Luis',
  sobrenome: 'Gustavo',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 111,
  sobrenome: 456,
  idade: 30,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'luis',
  sobrenome: 'gustavo',
  idade: 33,
};
console.log(aluno1, aluno2, aluno3);
