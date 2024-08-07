let residencia = require('./mudel');
function editar(id, novaresidencia){
    let index = residencia.findIndex(residencias => residencias.id === id)
    residencia[id] = {id: id, ...novaresidencia}
}
module.exports = editar