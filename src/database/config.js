const mysql = require('mysql2');

const config = require('../config/config.json')

const con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

con.connect((err)=>{
    if(err){
        console.log('Erro ao conectar ao banco de dado', err);
        return;
    }

    console.log('Conectado com o banco de dados')
})


module.exports = con