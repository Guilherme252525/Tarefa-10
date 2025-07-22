import { Cliente } from "./Cliente.js";
import { criarElementoCliente, removerCadastro } from "./utils.js";

const clientes = document.getElementById("listaDeClientes");

fetch("https://crudcrud.com/api/f8b20b36e904465290efd453dad0452a/Cadastro")
    .then(res => res.json())
    .then(listaDeClientes => {
        listaDeClientes.forEach(cadastro => {
            const item = criarElementoCliente(cadastro);
            clientes.appendChild(item);
        });
    });

document.getElementById("adi").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const novoCliente = new Cliente(nome, email);

    fetch("https://crudcrud.com/api/f8b20b36e904465290efd453dad0452a/Cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoCliente.toJSON())
    })
        .then(res => res.json())
        .then(cadastro => {
            const item = criarElementoCliente(cadastro);
            clientes.appendChild(item);
        });
});

// Precisa também tornar `removerCadastro` global se quiser usar no onclick inline
window.removerCadastro = (id, botao) => removerCadastro(id, botao, clientes);