const mysql = require('mysql');

function getConnection(){

  return mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'casadocodigo'
  })
}

module.exports = getConnection
