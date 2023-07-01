/// <reference types="cypress" />

import camisaVermelha from "../../pages/camisaVermelha";
import bolsa from "../../pages/bolsa";

import { productsPage } from "../../pages/productsPage";
import { checkoutPage } from "../../pages/checkoutPage";
import { loginPage } from "../../pages/loginPage";

beforeEach(() => {
  loginPage.acessarLogin();
  loginPage.preencherLogin();
  loginPage.clicaBotaoLogin();
});

describe("compras dos herois no ecommerce", () => {
  it("comprando camisa vermelha", () => {
    camisaVermelha.verificaExistencia();
    camisaVermelha.addAoCarrinho();
    camisaVermelha.verificaItemNoCarrinho();
    camisaVermelha.preencheDadosDaCompra();
    camisaVermelha.verificaItemNaListaFinal();
    camisaVermelha.finalizaCompra();
    camisaVermelha.verificaMsgErroCampoVazioEmDadosDeCompra();
  });

  it("comprando bolsa", () => {
    bolsa.verificaExistenciaBolsa();
    bolsa.addAoCarrinho();
    bolsa.verificaItemNoCarrinho();
    bolsa.preencheDadosDaCompra();
    bolsa.verificaItemNaListaFinal();
    bolsa.finalizaCompra();
  });

  it("compra produtos com preco menor p/ maior", () => {
    productsPage.selecionaFiltroMenorProMaior();
    productsPage.addProdutosMaisBaratosAoCarrinho();
    productsPage.qtdItensCarrinho().should("be.greaterThan", 0);
    checkoutPage.preencheDadosDasCompras();
    checkoutPage.continuar();
    checkoutPage.finalizaCompra();
    checkoutPage
      .getCompleteOrder()
      .should("have.text", "Thank you for your order!");
  });
});
