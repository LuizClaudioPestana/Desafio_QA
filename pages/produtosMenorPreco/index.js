const el = require('./elements').ELEMENTS;

class produtosMenorPreco {

    selecionaFiltro() {

        cy.get(el.filtro).select(el.menorParaMaior);

    }

    addProdutosMaisBaratosAoCarrinho() {

        cy.get(el.primeiroProdutoMaisBarato).click();
        cy.get(el.segundoProdutoMaisBarato).click();
        cy.get(el.iconeCarrinho).click();

    }

    verificaItensNoCarrinho() {

        cy.contains(el.divTag, el.qtdItensCarrinho).should('not.be.null');

    }

    preencheDadosDasCompras() {

        cy.get(el.checkOutButton).click();
        cy.get(el.primeiroNome).type('Luiz');
        cy.get(el.ultimoNome).type('Pestana');
        cy.get(el.cep).type('55555-555');
        cy.get(el.continuarButton).click();
    }

    verificaItensNaListaFinal() {

        cy.contains(el.divTag, el.qtdItensCarrinho).should('not.be.null');
    }

    finalizaCompras() {

        cy.get(el.finalizarButton).click();
        cy.get(el.voltarButton).click();

    }

}

export default new produtosMenorPreco();