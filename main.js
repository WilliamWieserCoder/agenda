"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contato_1 = require("./Contato");
var Agenda_1 = require("./Agenda");
var ask = require('readline-sync');
function main() {
    var agenda = new Agenda_1.Agenda();
    var sustentaMenu = true;
    while (sustentaMenu) {
        console.log("\nEscolha uma opção:");
        console.log("1 - Adicionar contato");
        console.log("2 - Remover contato");
        console.log("3 - Listar todos os contatos");
        console.log("4 - Buscar contato");
        console.log("5 - Editar contato");
        console.log("6 - Sair");
        // Captura a opção do usuário
        var opcao = ask.question("Digite a opção desejada: ");
        switch (opcao) {
            case "1":
                var nome1 = ask.question("Digite o nome do contato: ");
                var telefone1 = ask.question("Digite o telefone do contato: ");
                var email1 = ask.question("Digite o email do contato: ");
                var contato1 = new Contato_1.Contato(nome1, telefone1, email1);
                agenda.adicionarContato(contato1);
                break;
            case "2":
                var nome2 = ask.question("Digite o nome do contato a ser removido: ");
                agenda.removerContato(nome2);
                break;
            case "3":
                agenda.listarContatos();
                break;
            case "4":
                var nome4 = ask.question("Digite o nome do contato a ser buscado: ");
                agenda.buscarContato(nome4);
                break;
            case "5":
                var nome5 = ask.question("Digite o nome do contato a ser editado: ");
                var novoNome = ask.question("Digite o novo nome: ");
                var novoTelefone = ask.question("Digite o novo telefone: ");
                var novoEmail = ask.question("Digite o novo email: ");
                var novoContato = new Contato_1.Contato(novoNome, novoTelefone, novoEmail);
                agenda.editarContato(nome5, novoContato);
                break;
            case "6":
                sustentaMenu = false;
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}
main();
