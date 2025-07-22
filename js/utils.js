export function criarElementoCliente(cadastro, removerCallback) {
    const item = document.createElement("li");
    item.innerHTML = `${cadastro.cliente} <p>${cadastro.email}</p> 
        <button onclick="removerCadastro('${cadastro._id}', this)">X</button>`;
    return item;
}

export function removerCadastro(id, botao, clientes) {
    fetch(`https://crudcrud.com/api/f8b20b36e904465290efd453dad0452a/Cadastro/${id}`, {
        method: "DELETE"
    }).then(() => {
        const li = botao.parentElement;
        clientes.removeChild(li);
    });
}