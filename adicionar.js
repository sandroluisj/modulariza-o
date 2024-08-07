let residencia = require('./mudel');
function adicionar(residencias){
    
    residencias.id = residencia.length + 1;
    let jaExiste = residencia.find(cont => cont.email === residencias.bairro);
    if (jaExiste) {
    console.log('Já existe essa pessoa');
    } else {
    console.log("adicionado")
        residencia.push(residencias);
    
    }
    }

module.exports = adicionar