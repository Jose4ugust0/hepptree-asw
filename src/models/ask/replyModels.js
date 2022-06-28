const con = require("../../database/config");

class replyModels
{
    static async insert(reply, id_ask, id_user){
        con.query("INSERT INTO `reply` (reply, id_ask, id_user) VALUES(?,?,?)", [reply, id_ask, id_user], (err)=>{
            if(err) throw err;
            console.log('Resposta salva com sucesso');
        })
    }
}

module.exports = replyModels;