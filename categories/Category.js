const Sequilize = require('sequelize')
const conn = require('../database/datanase')

const Category = conn.define('categories', {
    title: {
        type: Sequilize.STRING,
        allowNull: false
    }, slug: {
        type: Sequilize.STRING,
        allowNull: false
    }
})

module.exports = Category