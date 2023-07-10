export const redTshirtPage = {
    addRedTshirtToCart() {
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    },

    redTshirtGoToCart() {
        cy.get('.shopping_cart_link').click();
    },
};