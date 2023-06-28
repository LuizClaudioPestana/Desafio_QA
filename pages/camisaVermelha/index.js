const el = require('./elements').ELEMENTS;

class camisaVermelha {

    verificaExistencia() {

        cy.get(el.idCamisaVermelha).should('have.text', el.nomeCamisaVermelha);
    }

    addAoCarrinho() {

        cy.get(el.idCamisaVermelha).click();
        cy.get(el.buttonAddCamisaVermelha).click();
        cy.get(el.iconeCarrinho).click();
    }

    verificaItemNoCarrinho() {

        cy.contains(el.divTag, el.qtdItensCarrinho).should('not.be.null');

    }

    preencheDadosDaCompra() {

        cy.get(el.checkOutButton).click();
        cy.get(el.primeiroNome).type('Luiz');
        cy.get(el.ultimoNome).type('Pestana');
        cy.get(el.cep).type('55555-555');
        cy.get(el.continuarButton).click();

    }

    verificaItemNaListaFinal() {

        cy.contains(el.divTag, el.qtdItensCarrinho).should('not.be.null');

    }

    finalizaCompra() {

        cy.get(el.finalizarButton).click();
        cy.get(el.voltarButton).click();

    }

    verificaMsgErroCampoVazioEmDadosDeCompra() {

        cy.get(el.idCamisaVermelha).click();
        cy.get(el.buttonAddCamisaVermelha).click();
        cy.get(el.iconeCarrinho).click();
        cy.get(el.checkOutButton).click();
        cy.get(el.ultimoNome).type('Pestana').clear();
        cy.get(el.continuarButton).click();
        cy.contains(el.h3Tag, el.msgErroPrimeiroNome).should('be.visible');
        cy.get(el.primeiroNome).type('Luiz');
        cy.get(el.continuarButton).click();
        cy.contains(el.h3Tag, el.msgErroUltimoNome).should('be.visible');
        cy.get(el.ultimoNome).type('Pestana');
        cy.get(el.continuarButton).click();
        cy.contains(el.h3Tag, el.msgErroCep).should('be.visible');

    }


}


export default new camisaVermelha();