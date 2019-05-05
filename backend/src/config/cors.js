//como teremos front e backend o cors permite a comunicação entre eles
//aqui vamos criar um middleware padrão express (req, res, next)
module.exports = function(req, res, next){
    //cabeçalhos de response (res)
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() //continua o fluxo e vai para o próximo middleware
}