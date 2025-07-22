export class Cliente {
    constructor(nome, email) {
        this.cliente = nome;
        this.email = email;
    }

    toJSON() {
        return {
            cliente: this.cliente,
            email: this.email
        };
    }
}