export const LoginPage = {
    loginAcess() {
        cy.visit('https://www.saucedemo.com/');
    },

    fillLoginField() {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
    },

    clickOnLoginButton() {
        cy.get('#login-button').click();
    },
};