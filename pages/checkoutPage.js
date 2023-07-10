export const checkoutPage = {
  preencheDadosDasCompras() {
    cy.get("#checkout").click();
    cy.get("#first-name").type("Luiz");
    cy.get("#last-name").type("Pestana");
    cy.get("#postal-code").type("55555-555");
  },

  continuar() {
    cy.get("#continue").click();
  },

  finalizaCompra() {
    cy.get("#finish").click();
  },

  voltar() {
    cy.get("#back-to-products").click();
  },

  getCompleteOrder() {
    return cy.get(".complete-header");
  },
};
