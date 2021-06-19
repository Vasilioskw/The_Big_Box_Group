
require("dotenv").config();

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


var http = require('http')
var favicon = require('serve-favicon')
var finalhandler = require('finalhandler')
var path = require('path')

var _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))

var server = http.createServer(function onRequest (req, res) {
  var done = finalhandler(req, res)

  _favicon(req, res, function onNext (err) {
    if (err) return done(err)

    // continue to process the request here, etc.

    res.statusCode = 404
    res.end('oops')
  })
})


const {apost, dpost} = require("./models");

app.get('/', (req, res) => {

    res.render('home')
});

app.get('/profile', (req, res) => {

    res.render('portfolio')
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
    const{aarea, abuildingsqft, alandacerage, acategory, anotes} = req.body;
    const newapost = await apost.create({aarea, abuildingsqft, alandacerage, acategory, anotes})
    res.render('home')
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
        const{darea, dbuildingsqft, dlandacerage, dcategory, dnotes} = req.body;
        const newapost = await dpost.create({darea, dbuildingsqft, dlandacerage, dcategory, dnotes})
        res.render('home')
    });


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});
