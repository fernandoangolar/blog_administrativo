const Sequelize = require('sequelize')

const conn = new Sequelize('blog_administrativo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
} ) 

module.exports = conn