let residencia = require('./mudel');
function remover(index){
    residencia.splice(index, 1)
}
module.exports = remover