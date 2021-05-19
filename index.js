const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

const server = http.createServer(app);
const {Aposts, Dposts} = require("./models");

app.get('/', (req, res) => {

    res.render('TBBG')
});

app.get('/profile', (req, res) => {

    res.render('profile')
});


app.get('/aquisitions', async (req, res) => {
const aposts = await Aposts.findAll() 
// console.log("Aposts data: ", aposts)

    res.render('aquisitions', {
        locals: {
         data: aposts
            
        }
});
});

app.post('/aquisitions/createaposts', async (req, res) => {
    console.log(req.body)
    const{aarea, abuildingsqft, alandacerage, acatagory, anotes} = req.body;
    const newapost = await Aposts.create({aarea, abuildingsqft, alandacerage, acatagory, anotes})
    res.render('TBBG')
});



app.get('/dispositions', async (req, res) => {
    const dposts = await Dposts.findAll() 
    // console.log("Aposts data: ", aposts)
    
        res.render('dispositions', {
            locals: {
             data: dposts
                
            }
    });
    });
    
    app.post('/dispositions/createaposts', async (req, res) => {
        console.log(req.body)
        const{darea, dbuildingsqft, dlandacerage, dcatagory, dnotes} = req.body;
        const newapost = await Dposts.create({darea, dbuildingsqft, dlandacerage, dcatagory, dnotes})
        res.render('TBBG')
    });


server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});