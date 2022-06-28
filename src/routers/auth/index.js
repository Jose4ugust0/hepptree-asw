const loginController = require('../../controllers/auth/loginController');
const registerController = require('../../controllers/auth/registerController');

const auth = require('express').Router();

auth.get('/signIn', loginController.index);
auth.get('/signUp', registerController.index);
auth.post('/signUp', registerController.register);
auth.post('/signIn', loginController.login)

module.exports = auth;