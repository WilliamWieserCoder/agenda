import { Contato } from './Contato'

export class Agenda {
  private contatos: Contato[] = []

  adicionarContato(contato: Contato): void {
    this.contatos.push(contato)
    console.log(`Contato ${contato.getNome()} adicionado com sucesso!`)
  }

  removerContato(nome: string): void {
    const index = this.contatos.findIndex(contato => contato.getNome() === nome)
    if (index !== -1) {
      this.contatos.splice(index, 1)
      console.log(`Contato ${nome} removido com sucesso!`)
    } else {
      console.log(`Contato ${nome} não encontrado.`)
    }
  }

  listarContatos(): void {
    if (this.contatos.length === 0) {
      console.log("Nenhum contato na agenda.")
    } else {
      console.log("Contatos na agenda:")
      this.contatos.forEach(contato => contato.mostrarContato())
    }
  }

  // Buscar contato por nome
  buscarContato(nome: string): void {
    const contato = this.contatos.find(c => c.getNome() === nome)
    if (contato) {
      contato.mostrarContato()
    } else {
      console.log(`Contato ${nome} não encontrado.`)
    }
  }

  // Editar contato
  editarContato(nome: string, novoContato: Contato): void {
    const index = this.contatos.findIndex(contato => contato.getNome() === nome)
    if (index !== -1) {
      this.contatos[index] = novoContato;
      console.log(`Contato ${nome} atualizado com sucesso!`)
    } else {
      console.log(`Contato ${nome} não encontrado.`)
    }
  }
}
