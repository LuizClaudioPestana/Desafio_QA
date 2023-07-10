export const checkOutPage = {
    messageErrorEmptyField() {
        cy.get('h3');
    },
    fillCustomerData() {
        cy.get('#first-name').type('Luiz');
        cy.get('#last-name').type('Pestana');
        cy.get('#postal-code').type('55555-555');
    },

    clickOnContinueButton() {
        cy.get('#continue').click();
    },

    verifyItemAtFinalList() {
        return cy.contains('.div', '.cart_quantity')
    },

    clickOnFinishPurchase() {
        cy.get('#finish').click();
    },

    getCompleteOrder() {
        return cy.get('.complete-header');
    },

    clickOnBackHomeButton() {
        cy.get('#back-to-products').click();
    },
};