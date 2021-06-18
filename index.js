// const http = require('http');
require("dotenv").config();

// const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

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
const {apost, dpost} = require("./models");

app.get('/', (req, res) => {

    res.render('TBBG')
});

app.get('/profile', (req, res) => {

    res.render('profile')
});


app.get('/aquisitions', async (req, res) => {
const apostsData = await apost.findAll() 
// console.log("aposts data: ", aposts)
    res.render('aquisitions', {
        locals: {
         data: apostsData
            
        }
});
});

app.post('/aquisitions/createaposts', async (req, res) => {
    console.log(req.body)
    const{aarea, abuildingsqft, alandacerage, acatagory, anotes} = req.body;
    const newapost = await apost.create({aarea, abuildingsqft, alandacerage, acatagory, anotes})
    res.render('TBBG')
});



app.get('/dispositions', async (req, res) => {
    const dpostsData = await dpost.findAll() 
    // console.log("dposts data: ", dposts)
        res.render('dispositions', {
            locals: {
             data: dpostsData
                
            }
    });
    });
    
    app.post('/dispositions/createdposts', async (req, res) => {
        console.log(req.body)
        const{darea, dbuildingsqft, dlandacerage, dcatagory, dnotes} = req.body;
        const newapost = await dpost.create({darea, dbuildingsqft, dlandacerage, dcatagory, dnotes})
        res.render('TBBG')
    });


server.listen(port, () => {
    console.log(`Server is running at ${port}`)
});
