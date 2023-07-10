export const productsPage = {
  selecionaFiltroMenorProMaior() {
    cy.get("[data-test=product_sort_container]").select("Price (low to high)");
  },

  addProdutosMaisBaratosAoCarrinho() {
    cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get(".shopping_cart_link").click();
  },

  qtdItensCarrinho() {
    return cy.contains(".div", ".cart_quantity");
  },
};
