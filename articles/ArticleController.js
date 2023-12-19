const express = require('express')
const router = express.Router()

router.get('/article', (req, res) => {
    res.send('Rota de artigos')
})

router.get('/admin/articles/new', (req, res) => {
    res.send('Rota para criar uma novo articles')
})

module.exports = router