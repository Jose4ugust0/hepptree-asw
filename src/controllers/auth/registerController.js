const { Insert } = require("../../models/user/userModels");
const con = require('../../database/config');
const bcrypt = require('bcryptjs')
module.exports = {
    index(req,res){
        if(req.session.loggedin){
            res.redirect('/')
        }else{
            res.render('signUp', {loggedin: req.session.loggedin})
        }
    },

    register(req, res){
        try {

            const {name, lastName, email, password} = req.body;
            const passHash = bcrypt.hashSync(password, 10)

            if(password.lenght < 6){
                res.send("<script>alert('Senha muito curta'); window.location.href='/signUp'</script>");
            }else{
                con.query('SELECT * FROM `users` WHERE email = ?', [email], (err, results)=>{
                    if(results[0]){
                        res.send('<script>alert("Este email já foi cadastrado"); window.location.href="/signIn"</script>');
                    }else{
                        if(Insert(name, lastName, email, passHash)){
                            res.send('<script>alert("Sua conta foi criada com sucesso");window.location.href="/signIn"</script>');
                        }else{
                            res.send('<script>alert("houve um erro ao registrar, tente novamente"); window.location.href="/signUp"</script>')
                        }
                    }
                })
                
                

                
            }

            
            
        } catch (error) {
            console.log(error.message)
            res.send('<script>alert("houve um erro, tente novamente"); window.location.href="/signUp"</script>')
        }
    }
}