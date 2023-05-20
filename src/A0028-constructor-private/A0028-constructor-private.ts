//singleton Gang of four GOF
// consultor privado, nao tem acesso ao new database.
///nao pode mais instanciar a classe, mas pode ser acessado por dentro,
//mas pode usar metodo estatico sem instanciar
//get database ou retornar uma que ja foi criada antes
// receber host user passowrd.  sem private, pois sao so valores
//

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user} , ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('retornando instancia ja criada');
      return Database.database;
    }
    console.log('criando nova instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}
//apos mudanca para static method, precisara factory method, GOF
//const db1 = new Database('localhost', 'root', '123456');
//db1.connect();

const db1 = Database.getDatabase('localhost', 'root', '123456');

const db2 = new Database('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');

console.log(db1 === db2);
