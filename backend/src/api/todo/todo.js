// mapeamento do objeto para o mongo
const restful = require('node-restful')
const mongoose = restful.mongoose

//esquema do nosso obj
const todoSchema = new mongoose.Schema({
    description: {type: String, require: true},
    done: {type: Boolean, require: true, default: false},
    createdAt: {type: Date, require: true, default: Date.now}
})

//exporta o modelo
module.exports = restful.model('Todo', todoSchema)