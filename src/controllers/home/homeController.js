const con = require('../../database/config')
module.exports = {
    index(req,res){
        con.query("SELECT * FROM `asks` ORDER BY id DESC", (err, asks)=>{ 
            console.log(asks)
            res.render('home', {loggedin: req.session.loggedin, feed: asks})
        })
        
    }
}