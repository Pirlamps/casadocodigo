class ProdutoDao {

  constructor (connection) {
    this.connection = connection
  }

  lista(callback){
    this.connection.query('SELECT * FROM livros', callback)
    this.end()
  }

}

module.exports = ProdutoDao
