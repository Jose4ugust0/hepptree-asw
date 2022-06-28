const con = require('../../database/config')
module.exports = {
    index(req, res){
        if(req.session.loggedin){
            con.query('SELECT * FROM `asks` WHERE id_user = ? ORDER BY id DESC', [req.session.userId],(err, asks)=>{
                res.render('me', {loggedin: req.session.loggedin, nome: req.session.name, sobrenome: req.session.lastName, icon: req.session.icon, feed: asks, count: asks.length})
            })
            
        }else{
            res.redirect('/')
        }
    }
}