//record representa um obj onde
//diz.....tipo das chaves, dos valores e objetos
//RECORD
const objeto1: Record<string, string | number> = {
  nome: 'luis',
  sobrenome: 'gustavo',
  idade: 30,
};

console.log(objeto1);

type Pessoa = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//required
type PessoaRequired = Required<Pessoa>;
//partial
type PessoaPartial = Partial<PessoaRequired>;
//readonly
type PessoaReadonly = Readonly<PessoaRequired>;
//pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaProtocolo = {
  nome: 'luis',
  sobrenome: 'gustavo',
  idade: 30,
};

console.log(objeto2);

//extract e exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//module mode
export default 1;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: 30;
};

const accountMongo: AccountMongo = {
  _id: 'sadfasdfl323423423',
  nome: 'Luis',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...acountData } = accountMongo;
  return { ...acountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
