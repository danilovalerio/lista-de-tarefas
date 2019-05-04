const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//sempre que chegar uma requisição url o bodyParser faz a interpretação
server.use(bodyParser.urlencoded({ extended : true}))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND executando na porta ${port}.`)
})

module.exports = server