"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.contatos = [];
    }
    Agenda.prototype.adicionarContato = function (contato) {
        this.contatos.push(contato);
        console.log("Contato ".concat(contato.getNome(), " adicionado com sucesso!"));
    };
    Agenda.prototype.removerContato = function (nome) {
        var index = this.contatos.findIndex(function (contato) { return contato.getNome() === nome; });
        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log("Contato ".concat(nome, " removido com sucesso!"));
        }
        else {
            console.log("Contato ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    Agenda.prototype.listarContatos = function () {
        if (this.contatos.length === 0) {
            console.log("Nenhum contato na agenda.");
        }
        else {
            console.log("Contatos na agenda:");
            this.contatos.forEach(function (contato) { return contato.mostrarContato(); });
        }
    };
    // Buscar contato por nome
    Agenda.prototype.buscarContato = function (nome) {
        var contato = this.contatos.find(function (c) { return c.getNome() === nome; });
        if (contato) {
            contato.mostrarContato();
        }
        else {
            console.log("Contato ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    // Editar contato
    Agenda.prototype.editarContato = function (nome, novoContato) {
        var index = this.contatos.findIndex(function (contato) { return contato.getNome() === nome; });
        if (index !== -1) {
            this.contatos[index] = novoContato;
            console.log("Contato ".concat(nome, " atualizado com sucesso!"));
        }
        else {
            console.log("Contato ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
