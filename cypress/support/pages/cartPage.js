export const cartPage = {
    verifyProductsAtCart() {
        return cy.contains('.div', 'class=cart_quantity');
    },

    clickOnCheckOutButton() {
        cy.get('#checkout').click();
    },
};