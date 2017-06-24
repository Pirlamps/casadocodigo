const express = require('express')
const load = require('express-load');
const bodyParser = require('body-parser');
const app = express()
const expressValidator = require('express-validator')

app.set("view engine","ejs")
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())
load('routes').into(app)


module.exports = app
