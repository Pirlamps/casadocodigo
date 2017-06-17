const express = require('express')
const load = require('express-load');
const bodyParser = require('body-parser');
const app = express()

app.set("view engine","ejs")
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true }))
load('routes').into(app)


module.exports = app
