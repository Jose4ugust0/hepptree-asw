const con = require('../../database/config')

class askModels{
    static async Insert(title, ask, id){
        con.query("INSERT INTO `asks` (title,ask,id_user) VALUES(?,?,?)", [title, ask, id], (err)=>{
            if(err) throw err;
            console.debug('pergunta cadastrada com sucesso');
        })
    }
}

module.exports = askModels;