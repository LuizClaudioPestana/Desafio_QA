export const productsPage = {
    existRedTshirt() {
        return cy.get('#item_3_title_link');
    },

    clickOnRedTshirt() {
        cy.get('#item_3_title_link').click();
    },

    existBag() {
        return cy.get('#item_4_title_link');
    },

    clickOnBag() {
        cy.get('#item_4_title_link').click();
    },

    filterSelect() {
        cy.get('[data-test=product_sort_container]').select('Price (low to high)');
    },

    selectFirstProductCheaper() {
        cy.get('#add-to-cart-sauce-labs-onesie').click();
    },

    selectSecondProductCheaper() {
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
    },

    selectOnCartIcon() {
        cy.get('.shopping_cart_link').click();
    },

};