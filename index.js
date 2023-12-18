const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const conn = require('./database/datanase')

app.set('view engine', 'ejs')

app.use(bodyparser.urlencoded( {extended: false} ))
app.use(bodyparser.json())

conn
    .authenticate()
    .then( () => {
        console.log('Conexão feita com sucesso!')
    }).catch( (error) => {
        console.log(error)
    } ) 

app.get('/', (req, res) => {
    res.render('index')
})

const port = 8080
app.listen(port, () => {
    console.log('O servidor está rodando!', port)
})