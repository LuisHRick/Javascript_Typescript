const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeControler')

function meuMiddleware(req, res, next){
    console.log('Passei no middleware')
    next()
}

route.get('/', meuMiddleware, homeController.paginaInicial)
route.post('/', homeController.trataPost)

module.exports = route