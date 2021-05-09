const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
const db = require('./db');

app.get('/aquisitions', (req, res) => {
    res.render('aquisitions.html');
});

app.get('/dispositions', (req, res) => {
    res.render('/dispositions.html');
});
