const { UpdateProfile } = require("../../models/user/userModels");

module.exports = {
    index(req, res){
        if(req.session.loggedin){
            res.render('edit-profile',{loggedin: req.session.loggedin, nome: req.session.name, sobrenome: req.session.lastName, email: req.session.email})
        }else{
            res.redirect('/')
        }
    },

    save(req, res){
        try {

            const {name, lastName, email} = req.body;

            if(UpdateProfile(name, lastName, email, req.session.userId)){
                req.session.destroy(null)
                res.send('<script>alert("informações atualizadas com sucesso, você será deslogado para que as informações seja salvas");window.location.href="/me"</script>');
            
            }else{
                res.send('<script>alert("houve um erro tente novamente mais tarde"); window.location.href="/me"</script>')
            }
            
        } catch (error) {
            console.log(error.message);
            res.send('<script>alert("Houve um erro, tente novamente mais tarde"); window.location.href="/me"</script>')
        }
    }
}