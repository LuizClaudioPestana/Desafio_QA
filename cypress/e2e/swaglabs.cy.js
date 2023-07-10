/// <reference types="cypress" />

import { LoginPage } from "../support/pages/LoginPage";
import { redTshirtPage } from "../support/pages/redTshirtPage";
import { bagPage } from "../support/pages/bagPage";
import { checkOutPage } from "../support/pages/checkOutPage";
import { cartPage } from "../support/pages/cartPage";
import { productsPage } from "../support/pages/productsPage";


beforeEach(() => {
    LoginPage.loginAcess();
    LoginPage.fillLoginField();
    LoginPage.clickOnLoginButton();
});


describe('Heros buying at the ecommerce', () => {


    it('Buying a Red T-shirt', () => {

        productsPage.existRedTshirt()
            .should('have.text', 'Test.allTheThings() T-Shirt (Red)');
        productsPage.clickOnRedTshirt();
        redTshirtPage.addRedTshirtToCart();
        redTshirtPage.redTshirtGoToCart();
        cartPage.verifyProductsAtCart()
            .should('not.be.null');
        cartPage.clickOnCheckOutButton();
        checkOutPage.fillCustomerData();
        checkOutPage.clickOnContinueButton();
        checkOutPage.verifyItemAtFinalList()
            .should('not.be.null');
        checkOutPage.clickOnFinishPurchase();
        checkOutPage.getCompleteOrder()
            .should('have.text', 'Thank you for your order!');
        checkOutPage.clickOnBackHomeButton();

    });

    it('Buying a Bag ', () => {

        productsPage.existBag()
            .should('have.text', 'Sauce Labs Backpack');
        productsPage.clickOnBag();
        bagPage.addBagToCart();
        bagPage.bagGotoCart();
        cartPage.verifyProductsAtCart()
            .should('not.be.null');
        cartPage.clickOnCheckOutButton();
        checkOutPage.fillCustomerData();
        checkOutPage.clickOnContinueButton();
        checkOutPage.verifyItemAtFinalList()
            .should('not.be.null');
        checkOutPage.clickOnFinishPurchase();
        checkOutPage.getCompleteOrder()
            .should('have.text', 'Thank you for your order!');
        checkOutPage.clickOnBackHomeButton();

    });

    it('Buying products with the price low to high', () => {

        productsPage.filterSelect();
        productsPage.selectFirstProductCheaper();
        productsPage.selectSecondProductCheaper();
        productsPage.selectOnCartIcon();
        cartPage.verifyProductsAtCart()
            .should('not.be.null');
        cartPage.clickOnCheckOutButton();
        checkOutPage.fillCustomerData();
        checkOutPage.clickOnContinueButton();
        checkOutPage.verifyItemAtFinalList()
            .should('not.be.null');
        checkOutPage.clickOnFinishPurchase();
        checkOutPage.getCompleteOrder()
            .should('have.text', 'Thank you for your order!');
        checkOutPage.clickOnBackHomeButton();

    });
});