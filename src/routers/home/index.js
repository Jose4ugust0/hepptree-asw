const homeController = require('../../controllers/home/homeController');
const searchController = require('../../controllers/home/searchController');

const home = require('express').Router();

home.get('/', homeController.index)
home.get('/search', searchController.index)

module.exports = home;