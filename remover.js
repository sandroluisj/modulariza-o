let residencia = require('./mudel');
function remover(id){
    let index = residencia.findIndex(residencias => residencias.id === id)
    residencia.splice(id, 1)
}
module.exports = remover