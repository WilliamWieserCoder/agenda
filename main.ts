import { Contato } from './Contato'
import { Agenda } from './Agenda'
const ask = require('readline-sync')

function main() {
  const agenda = new Agenda();
  let sustentaMenu = true;

  while (sustentaMenu) {
    console.log("\nEscolha uma opção:")
    console.log("1 - Adicionar contato")
    console.log("2 - Remover contato")
    console.log("3 - Listar todos os contatos")
    console.log("4 - Buscar contato")
    console.log("5 - Editar contato")
    console.log("6 - Sair")

    // Captura a opção do usuário
    const opcao = ask.question("Digite a opção desejada: ")
    
    switch (opcao) {
      case "1":
        const nome1 = ask.question("Digite o nome do contato: ")
        const telefone1 = ask.question("Digite o telefone do contato: ")
        const email1 = ask.question("Digite o email do contato: ")
        const contato1 = new Contato(nome1, telefone1, email1)
        agenda.adicionarContato(contato1)
        break
      
      case "2":
        const nome2 = ask.question("Digite o nome do contato a ser removido: ")
        agenda.removerContato(nome2)
        break
      
      case "3":
        agenda.listarContatos()
        break
      
      case "4":
        const nome4 = ask.question("Digite o nome do contato a ser buscado: ")
        agenda.buscarContato(nome4)
        break
      
      case "5":
        const nome5 = ask.question("Digite o nome do contato a ser editado: ")
        const novoNome = ask.question("Digite o novo nome: ")
        const novoTelefone = ask.question("Digite o novo telefone: ")
        const novoEmail = ask.question("Digite o novo email: ")
        const novoContato = new Contato(novoNome, novoTelefone, novoEmail)
        agenda.editarContato(nome5, novoContato)
        break
      
      case "6":
        sustentaMenu = false
        console.log("Saindo do sistema...")
        break
      
      default:
        console.log("Opção inválida. Tente novamente.")
        break
    }
  }
}

main()
