export const bagPage = {
    addBagToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    },

    bagGotoCart() {
        cy.get('.shopping_cart_link').click();
    },
};