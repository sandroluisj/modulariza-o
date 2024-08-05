let residencia = require('./mudel');
function listar(){
    residencia.forEach((residencias, index)=>{
        console.log(`${index +1}. residencia: ${residencias.Rua}, numero:${residencias.numero}, bairro: ${residencias.bairro}, pessoas: ${residencias.pessoas} `)
    })
}
module.exports = listar