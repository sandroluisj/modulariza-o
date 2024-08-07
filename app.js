const prompt = require('prompt-sync')();
const listar = require('./listar');
const adicionar = require('./adicionar');
const editar = require('./editar');
const remover = require('./remover');

menu()
function menu (){
console.log(`1.listar
2. adicionar 
3. editar
4. remover
5. sair `)
    const opção = prompt ("escolha uma opção:")
    
    switch (opção){
        case "1":
        listar()
        menu(); 
        break;
        case "2":
            const Rua = prompt("Rua: ");
            let numeros = [];
            let numero;
            while ((numero = prompt('numero (ou deixe em branco para sair): '))) {
            numeros.push(numero);
            }
            const bairro = prompt("bairro: ");
            const pessoas = prompt("pessoas: ");
            adicionar({Rua,numero,bairro,pessoas })
            console.log("adicinado");
            menu()
            break;
        case "3":
            listar()
            id = parseInt(prompt("numero que vc deseja para autualizar:")) -1;
            const novarua = prompt ("nova rua: ");
            let novonumeros = [];
            let novonumero;
            while ((novonumero = prompt('numero (ou deixe em branco para sair): '))) {
                novonumeros.push(novonumero);
            }
            const novobairro = prompt ("novo bairro: ");
            const novaspessoas = prompt ("novas pessoas: ");
            editar(id, {Rua: novarua,  numero: novonumero, bairro: novobairro, pessoas:novaspessoas});
            console.log ("autualizado com sucesso!!")
            menu()
            break;
        case "4":
            listar()    
            id = parseInt(prompt("numero que vc deseja para remover")) -1;
            remover(index); 
            console.log("residencia removido")
            menu()
            break;
        case"5":
            break;
        default:
            console.log("erro!")
            menu()
          



    }
}
