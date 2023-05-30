//encadeamento opcional e operador de coalescencia nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto sllslsll ',
  //data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'nao existe data');
