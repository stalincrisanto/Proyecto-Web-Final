const mysql = require('mysql2');

const mysqlConexion = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'colegio',
    password:'',
    multipleStatements: true
});

module.exports = mysqlConexion;