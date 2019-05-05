const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//sempre que chegar uma requisição url o bodyParser faz a interpretação
server.use(bodyParser.urlencoded({ extended : true}))
server.use(bodyParser.json())
//permite através do middle criado no cors.js a api ser consumida através de outras origens
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND executando na porta ${port}.`)
})

module.exports = server