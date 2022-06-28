const con = require('../../database/config');
const bcrypt =require('bcryptjs')
module.exports = {
    index(req,res){
        if(req.session.loggedin){
            res.redirect('/')
        }else{
            res.render('signIn', {loggedin: req.session.loggedin})
        }
    },
    login(req,res){
        const {email, password} = req.body;

        con.query("SELECT * FROM `users` WHERE email = ?", [email], (err, results)=>{
            if(results[0]){
                if(bcrypt.compareSync(password, results[0].password)){
                    req.session.loggedin = true;
                    req.session.cookie.maxAge = 60 * 60 * 24 * 1000;
                    req.session.userId = results[0].id;
                    req.session.name = results[0].nome;
                    req.session.lastName = results[0].sobrenome;
                    req.session.email = results[0].email;
                    req.session.icon = results[0].icon;

                    res.redirect('/')
                }else{
                    res.send('<script>alert("senha incorreta");window.location.href="/signIn"</script>')
                }
            }else{
                res.send('<script>alert("Usuario inexistente"); window.location.href="/signUp"</script>');
            }
        })
    }
}