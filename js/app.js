// Pega a lista de clientes do html
const clientes = document.getElementById("listaDeClientes")

//Busca os clientes existentes com um comando GET
fetch("https://crudcrud.com/api/f8b20b36e904465290efd453dad0452a/Cadastro")
.then(resposta => resposta.json())
.then((listaDeClientes) => {
    listaDeClientes.forEach(cadastro => {
        const item = document.createElement("li");
        item.innerHTML = `${cadastro.cliente} <p>${cadastro.email}</p> <button onclick="removerCadastro('${cadastro._id}', this)" id="rev">X</button>`;
        clientes.appendChild(item);
    }); 

});

// Evento listener para adicionar um novo cliente a lista
document.getElementById("adi").addEventListener("click", ()=>{
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    fetch("https://crudcrud.com/api/f8b20b36e904465290efd453dad0452a/Cadastro", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify( {cliente: nome, email: email})

    })

    .then(resposta => resposta.json())
    .then((cadastro) =>{
        // Essa linha cira um novo elemento "li"
        const item = document.createElement("li");
        //Isto define o conteúdo do HTMl (Cliente/nome e seu EMAIL) mais button de remover
        item.innerHTML = `${cadastro.cliente} <p>${cadastro.email}</p> <button onclick="removerCadastro('${cadastro._id}', this)" id="rev">X</button> `;
        //Cria o novo item HTML na lista de cadastros
        clientes.appendChild(item);
    });
    
});

//FUnção para remover um cadastro da lista de clientes!
function removerCadastro(id, botao) {
    fetch(`https://crudcrud.com/api/f8b20b36e904465290efd453dad0452a/Cadastro/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        const li = botao.parentElement;
        clientes.removeChild(li);
    });
}