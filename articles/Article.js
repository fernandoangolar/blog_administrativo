const Sequilize = require('sequelize')
const conn = require('../database/datanase')
const Category = require('../categories/Category')

const Article = conn.define('articles', {
    title: {
        type: Sequilize.STRING,
        allowNull: false
    }, 
    slug: {
        type: Sequilize.STRING,
        allowNull: false
    },
    body: {
        type: Sequilize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article) // Uma categoria tem muitos artigos
Article.belongsTo(Category) // Um Artigo pertence a uma categoria

module.exports = Article