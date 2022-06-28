const editIconController = require('../../controllers/me/editIconController');
const editProfileController = require('../../controllers/me/editProfileController');
const meController = require('../../controllers/me/meController');

const me = require('express').Router();

me.get('/me', meController.index);
me.get('/me/edit-profile', editProfileController.index);
me.get('/me/edit-icon', editIconController.index);
me.post('/me/edit-profile', editProfileController.save);
me.post('/edit-icon', editIconController.save)

module.exports = me;