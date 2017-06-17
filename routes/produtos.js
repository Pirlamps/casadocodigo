const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../dao/ProdutoDao')

function prodRoutes(app) {
  app.get('/produtos', (req, res) => {
    const connection = connectionFactory()
    const produtoDao = new ProdutoDao(connection)
    produtoDao.lista((err,result,fields) => {
      if(err){
        res.render('errors/503', {err})
      }
      res.render('produtos/lista', {result})
    })
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form')
  })

  app.post('/produtos', (req,res) => {
    const livro = req.body
    const connection = connectionFactory()
    const produtoDao = new ProdutoDao(connection)

    produtoDao.insere(livro, (err,result,fields) => {
      if(err){
        res.render('errors/503', {err})
      } else {
      res.redirect('/produtos')
      }
    })


  })
}



module.exports = prodRoutes
