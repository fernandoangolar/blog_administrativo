const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const conn = require('./database/datanase')
const Article = require('./articles/Article')
const Category = require('./categories/Category')


const categoriesController = require('./categories/CategoriesController')
const articleController = require('./articles/ArticleController')


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

// prefixo de categorias
app.use('/', categoriesController)

// prefixo de article
app.use('/', articleController)

app.get('/', (req, res) => {
    res.render('index')
})

const port = 8080
app.listen(port, () => {
    console.log('O servidor está rodando!', port)
})