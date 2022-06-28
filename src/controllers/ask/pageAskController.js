const con = require("../../database/config");
const { insert } = require("../../models/ask/replyModels");

module.exports = {
    index(req, res){
        
            const { id } = req.params;
            con.query("SELECT *  FROM `asks`  WHERE id = ? ", [id], (err, ask)=>{
                con.query("SELECT * FROM `users` WHERE id= ?", [ask[0].id_user], (err, user)=>{
                    
                    con.query("SELECT * FROM `reply`  INNER JOIN `users` ON  reply.id_user = users.id WHERE id_ask = ? ORDER BY reply.id DESC", [id], (err, reply)=>{
                        console.log(user)
                        console.log(ask)
                        console.log(reply)
                        res.render('page-ask', {loggedin: req.session.loggedin, asks: ask, users: user, replys: reply, count: reply.length})
                    })
                    
                })
                
            })
            
        
    },

    save(req, res){
        const { id } = req.params;
        try {

            const { reply } = req.body;

            if(insert(reply, id, req.session.userId)){
                res.send('<script>alert("Resposta adicionada com sucesso"); window.location.href="/page-ask/'+id+'"</script>')
            }else{
                res.send('<script>alert("Houve um erro tente novamente mais tarde"); window.location.href="/page-ask/'+id+'"</script>')
            }

            console.log(reply);
            
        } catch (error) {
            console.log(error.message);
            res.send('<script>alert("Houve um erro tente novamente mais tarde"); window.location.href="/page-ask/'+id+'"</script>')
        }
    }
}