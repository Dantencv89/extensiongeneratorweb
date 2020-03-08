const express = require('express')
const router = require('./router/router')
const app = express()
//const path = require('path');
const port = 3000
const url = 'localhost'
//const stringify = require('json-stringify');
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', router)

app.use('/webapp', express.static('webapp'))

app.listen(port, () => console.log(`Example app listening on  http://www.${url}:${port}/!`))

