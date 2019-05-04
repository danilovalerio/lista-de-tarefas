//gerencia a conexão e faz os mapeamentos dos objetos que vão do documento para o mongo
const mongoose = require('mongoose')
//mongoose usará a promise do próprio node
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')
