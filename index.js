const express = require('express');
const app = express();
const PORT = 3000;
const fileUpload = require('express-fileupload');
const session = require('express-session');
const path = require('path');
const router = require('./src/router');
const mysql = require('./src/database/config');



app.use(fileUpload());
app.use(session({
    secret:"jdheoriwbhfbreghbhorghfeuiofhgiheroigjefjgohhijskjbdslhvflhQWFHVJfvqoULCVHJSAVFAJOHFVAOFVHOVAEfvqoETUTCHJDJLHGOIUQFODYgytQYDGDBJAVKCJBCALcgxhjsgakjbfowahokfndkljfhoiwdhflusehjklvbfhjebfroesilhgvfjvojhv",
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: 60 * 60 * 24 * 1000
    }
}))

//config

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views/pages'));
app.use(express.static(__dirname + '/public'));

//carregar rotas

app.use(router);


app.listen(PORT, ()=> console.log('servidor rodando'));