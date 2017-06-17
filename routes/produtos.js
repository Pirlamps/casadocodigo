const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../dao/ProdutoDao')

function prodRoutes(app) {
  app.get('/produtos', (req, res) => {
    const connection = connectionFactory()
    const produtoDao = new ProdutoDao(connection)
    produtoDao.lista((err,result,fields) => {
      if(err){
        res.render('503', {err})
      }
      res.render('produtos/lista', {result})
    })
  })
}



module.exports = prodRoutes
