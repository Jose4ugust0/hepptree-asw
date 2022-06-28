
const ask = require('./routers/ask');
const auth = require('./routers/auth');
const home = require('./routers/home');
const me = require('./routers/me');

const router = require('express').Router();

router.get('/logout', (req, res)=>{
    req.session.destroy(null);
    res.redirect('/')
})

router.use(home);
router.use(auth);
router.use(ask);
router.use(me);


module.exports = router