const express = require('express')
const router = express.Router()
const app = express()
const path = require('path');
const port = 3000


// middleware that is specific to this router
router
    .use(function timeLog (req, res, next) {
        console.log('Time: ', Date.now());
    next()})
    .get('/', (req, res) =>{
        res.sendFile(path.join(__dirname + '/webapp/index.html'));
    })


app.use('/webapp', express.static('webapp'))


app.use('/', router)
app.listen(port, () => console.log(`Example app listening on  http://www.localhost:${port}/!`))

