const tabela = document.querySelector('.tabela-js')

axios.get('https://apiaulas--natvcer2.repl.co/funcionarios').then(function(resposta){

    //Pegando dados da requisição (Pegar os dados precisa fazer uma requisição antes)
    getData(resposta.data)
}).catch(function(error){
    console.log(error)

})

//Percorrer array
function getData(dados){

    //Funciona da mesma forma que o forEach, criando uma array function
    dados.map((item)=> {
        tabela.innerHTML += `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.nome}</td>
                <td>${item.cargo}</td>
                <td>${item.salario}</td>
                <td>    
                    <button class="btn btn-primary" onclick="editar(${item.id})">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-danger" onclick="deletar(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>

            `
    })  
}
