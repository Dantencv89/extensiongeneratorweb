const express = require('express')
const router = express.Router()
const port = 3000
const url = 'localhost'
const stringify = require('json-stringify');
//const bodyParser = require('body-parser')
//const jsonParser = bodyParser.json()
// middleware that is specific to this router
router
    .use(function timeLog (req, res, next) {
        console.log('Time: ', Date.now());
        next()
    })
    .get('/', (req, res) =>{
        
        res.redirect(`http://${url}:${port}/webapp/index.html`);
    })
    .post('/post',(req,res)=>{
        res.send(stringify(req.body))
    })

module.exports= router;