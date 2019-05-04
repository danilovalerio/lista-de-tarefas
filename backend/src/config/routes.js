const express = require('express')

//exporta uma funcao que recebe parâmetro
module.exports = function(server){

    //API Routes
    const router = express.Router()
    //server.use sempre será middleware
    //sempre que começar com /api será chamado esse router
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    //aqui registra os métodos do CRUD disponível lá em todoService.js
    todoService.register(router, '/todos')
}