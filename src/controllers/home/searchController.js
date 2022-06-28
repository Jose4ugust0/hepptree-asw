const con = require("../../database/config")

module.exports = {
    index(req,res){
        if(req.query.search){
            con.query("SELECT id, title, ask FROM `asks` WHERE MATCH (title, ask) AGAINST (?) ORDER BY id DESC", [req.query.search], (err, asks)=>{
                res.render('home', {loggedin: req.session.loggedin, feed: asks})
            })
              
        }else{
            res.redirect('/')
        }
    }
}