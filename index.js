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

app.get('/', (req, res) => {

    res.render('TBBG')
});

app.get('/profile', (req, res) => {

    res.render('profile')
});



app.get('/aquisitions', (req, res) => {
const aposts = {
    aarea: "Houston, TX", 
    abuildingsqft: 40943, 
    alandacerage: 2, 
    acategory: "Shopping Center"
};

    res.render('aquisitions', {
        locals: {
            aposts
        }
});
})
app.get('/dispositions', (req, res) => {
    res.render('/dispositions');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});
