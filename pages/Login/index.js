//acoes de interacao com a pg
//acoes - 

const el = require('./elements').ELEMENTS;

class Login {

    acessarLogin() {
        cy.visit('https://www.saucedemo.com/');
    }

    preencherLogin() {

        cy.get(el.idNome).type('standard_user');
        cy.get(el.idSenha).type('secret_sauce');
        cy.get(el.buttonLogin).click();
    }

    verificaCampoVazioUsuario() {

        cy.get(el.buttonLogin).click();
        cy.contains(el.titulo, el.mensagemErroUsuario).should('be.visible');

    }

}

export default new Login();