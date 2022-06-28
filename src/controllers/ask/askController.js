const { Insert } = require("../../models/ask/askModels");

module.exports = {
    index(req, res){
        if(req.session.loggedin){
            res.render('ask', {loggedin: req.session.loggedin})
        }else{
            res.redirect('/')
        }
    },

    create(req, res){
        try {
            const {title, ask} = req.body;

            if(Insert(title,ask, req.session.userId)){
                res.send('<script>alert("Pergunta adicionada com sucesso"); window.location.href="/"</script>')
            }else{
                res.send('<script>alert("Houve um erro ao adicionar pergunta, tente novamente");window.location.href="/add-ask"</script>');
            }

        } catch (error) {
            console.log(error.message);
            res.send('<script>alert("Houve um erro tente novamente"); window.location.href="/add-ask"</script>');
        }
    }
}