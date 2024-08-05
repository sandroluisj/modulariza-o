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
    let index; 
    switch (opção){
        case "1":
        listar()
        menu(); 
        break;
        case "2":
            const Rua = prompt("Rua: ");
            const numero = prompt("numero ");
            const bairro = prompt("bairro: ");
            const pessoas = prompt("pessoas: ");
            adicionar({Rua,numero,bairro,pessoas })
            console.log("adicinado");
            menu()
            break;
        case "3":
            listar()
            index = parseInt(prompt("numero que vc deseja para autualizar:")) -1;
            const novarua = prompt ("nova rua: ");
            const novonumero = prompt ("nova numero: ");
            const novobairro = prompt ("novo bairro: ");
            const novaspessoas = prompt ("novas pessoas: ");
            editar(index, {Rua: novarua,  numero: novonumero, bairro: novobairro, pessoas:novaspessoas});
            console.log ("autualizado com sucesso!!")
            menu()
            break;
        case "4":
        listar()    
        index = parseInt(prompt("numero que vc deseja para autualizar:")) -1;
        remover(index); 
        console.log("contato removido")
        menu()
        break;
        case"5":
        break;
        default:
            console.log("erro!")
            menu()
          



    }
}
