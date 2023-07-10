const el = require("./elements").ELEMENTS;

class bolsa {
  verificaExistenciaBolsa() {
    cy.get(el.idBolsa).should("have.text", el.nomeBolsa);
  }

  addAoCarrinho() {
    cy.get(el.idBolsa).click();
    cy.get(el.buttonAddBolsa).click();
    cy.get(el.iconeCarrinho).click();
  }

  verificaItemNoCarrinho() {
    cy.contains(el.divTag, el.qtdItensCarrinho).should("not.be.null");
  }

  preencheDadosDaCompra() {
    cy.get(el.checkOutButton).click();
    cy.get(el.primeiroNome).type("Luiz");
    cy.get(el.ultimoNome).type("Pestana");
    cy.get(el.cep).type("55555-555");
    cy.get(el.continuarButton).click();
  }

  verificaItemNaListaFinal() {
    cy.contains(el.divTag, el.qtdItensCarrinho).should("not.be.null");
  }

  finalizaCompra() {
    cy.get(el.finalizarButton).click();
    cy.get(el.voltarButton).click();
  }
}

export default new bolsa();
