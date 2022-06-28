const { UpdateIcon } = require("../../models/user/userModels");
const fs = require('fs')

module.exports = {
    index(req, res){
        if(req.session.loggedin){
            res.render('edit-icon',{loggedin: req.session.loggedin, nome: req.session.name, sobrenome: req.session.lastName, email: req.session.email, icon: req.session.icon})
        }else{
            res.redirect('/')
        }
    },

    save(req, res){
        try {

            const icon = req.files.icon;

            if(icon == undefined){
                res.send('<script>alert("Uma imagem precisa ser selecionada"); window.location.href="/me/'+req.session.user+'"</script>')
            }else{
                

                let format = icon.name.split('.');
                let iconProfile = "";
                if(format[format.lenght - 1] == "image/jpeg" ||
                "image/png" ||
                "image/jpg"){
                    iconProfile = new Date().getTime()+".jpg";
                    icon.mv("public/uploads/peoples/icons/"+ iconProfile);
                }else{
                    fs.unlinkSync(req.files.icon.tempFilePath);
                }

                if(UpdateIcon(iconProfile, req.session.userId)){
                    const path = "public/uploads/peoples/icons/"+req.session.icon;
                    fs.unlink(path, ()=>{
                        console.log('deletado')
                    })
                    req.session.destroy(null)
                    res.send('<script>alert("Para que as alterações sejam salvas você sera deslogado"); window.location.href="/"</script>')
                }else{
                    res.send('<script>alert("Houve um erro tente novamente mais tarde"); window.location.href="/me/'+req.session.user+'"</script>')
                }

                
            }

            
        } catch (error) {
            console.log(error.message);
            res.send('<script>alert("Houve um erro, tente novamente mais tarde"); window.location.href="/me"</script>')
        }
    }
}