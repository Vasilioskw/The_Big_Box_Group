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
    
        // db.find(aposts.aarea)

    aarea: "Houston, TX", 
    abuildingsqft: 40943, 
    alandacerage: 2, 
    acategory: "Shopping Center",
    anotes: "call 474904408098546"
};

    res.render('aquisitions', {
        locals: {
            aposts
        }
});
})


app.get('/dispositions', (req, res) => {
    const dposts = {
        darea: "Houston, TX", 
        dbuildingsqft: 40943, 
        dlandacerage: 2, 
        dcategory: "Shopping Center",
        dnotes: "call 79834793445"
    };
    
        res.render('dispositions', {
            locals: {
                dposts
            }
    });
    })



// app.get('/dispositions', (req, res) => {
//     res.render('/dispositions');
// });












server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});
