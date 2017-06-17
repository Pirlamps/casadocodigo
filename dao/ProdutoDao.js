class ProdutoDao {

  constructor (connection) {
    this.connection = connection
  }

  lista(callback){
    this.connection.query('SELECT * FROM livros', callback)
    this.connection.end()
  }

  insere(livro, callback){
    this.connection.query('INSERT INTO livros SET ?', livro, callback)
    this.connection.end()
  }
}

module.exports = ProdutoDao
