const express = require('express')
const load = require('express-load');
const app = express()

app.set("view engine","ejs")
app.use(express.static('./public'))

load('routes').into(app)


module.exports = app
