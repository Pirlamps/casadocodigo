const ProdutoDao = require('../dao/ProdutoDao')

function prodRoutes(app) {
  app.get('/produtos', (req, res) => {
    const produtoDao = new ProdutoDao()
    produtoDao.lista((err,result,fields) => {
      if(err){
        res.render('errors/503', {err})
      }

      res.format({
        html: () => {res.status(200).render('produtos/lista', {result})},
        json: () => {res.status(200).json(result)}
      })


    })
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form')
  })

  app.post('/produtos', (req,res) => {

    req.assert('titulo', 'Título deve ser preenchido.').notEmpty()
    req.assert('preco', 'Preço deve ser um número.').isFloat()
    req.assert('preco', 'Preço deve ser um número.').notEmpty()

    const errors = req.validationErrors()

    if (errors ){

      res.format({
        html: () => {res.status(400).render('produtos/form', {errors})},
        json: () => {es.status(400).json(errors)}
      })
      // res.render('produtos/form', {errors})
      return
    }

    const livro = req.body

    const produtoDao = new ProdutoDao()


    produtoDao.insere(livro, (err,result,fields) => {
      if(err){
        res.render('errors/503', {err})
      } else {
        res.redirect('/produtos')
      }          res.status(400).render('produtos/form', {errors})

    })


  })
}



module.exports = prodRoutes
