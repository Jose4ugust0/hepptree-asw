const con = require('../../database/config');


class userModels{
    static async Insert(name, lastName, email, password){
        
        con.query('INSERT INTO `users` (nome, sobrenome, email, password) VALUES(?,?,?,?)', [name, lastName, email, password], ()=>{
            console.log('registrado com sucesso');
        })
    }

    static async UpdateProfile(name, lastName, email, id){
        con.query("UPDATE `users` SET nome= ?, sobrenome = ?, email = ? WHERE id = ?", [name,lastName,email, id], (error)=>{
            
            console.log('atualizado com sucesso');
        })
    }

    static async UpdateIcon(icon, id){
        con.query("UPDATE `users` SET icon = ? WHERE id = ?", [icon, id], (error)=>{
            console.log(error);
            console.log("Atualizado com sucesso");
        })
    }
}

module.exports = userModels;