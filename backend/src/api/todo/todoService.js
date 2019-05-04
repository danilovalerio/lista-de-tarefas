//quando fizer o required recebe o Todo que foi definido no todo.js
const Todo = require('./todo')

//disponibiliza a api rest com os métodos já disponíveis
Todo.methods(['get', 'post', 'put', 'delete'])
//Por padrão o update não faz algumas validações
//{new:retorna atualização com registro novo, runValidators: valida obrigatoriadades de campo por ex.}
Todo.updateOptions({new:true, runValidators: true})

//exporta o todo com o CRUD funfando
module.exports = Todo
