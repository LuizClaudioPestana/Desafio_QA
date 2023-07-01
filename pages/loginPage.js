export const loginPage = {
  acessarLogin() {
    cy.visit("https://www.saucedemo.com/");
  },

  preencherLogin() {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
  },

  clicaBotaoLogin() {
    cy.get("#login-button").click();
  },

  mensagemErro() {
    return cy.contains("h3");
  },
};
