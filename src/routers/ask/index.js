const askController = require('../../controllers/ask/askController');
const pageAskController = require('../../controllers/ask/pageAskController');

const ask = require('express').Router();

ask.get('/add-ask', askController.index);
ask.post('/add-ask', askController.create);
ask.get('/page-ask/:id', pageAskController.index)
ask.post('/page-ask/:id', pageAskController.save)

module.exports = ask;