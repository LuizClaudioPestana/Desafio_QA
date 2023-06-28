/// <reference types="cypress" />

import Login from "../support/pages/Login";
import camisaVermelha from "../support/pages/camisaVermelha";
import bolsa from "../support/pages/bolsa";
import produtosMenorPreco from "../support/pages/produtosMenorPreco";


beforeEach(() => {

    Login.acessarLogin();

});


describe('compras dos herois no ecommerce', () => {


    it('comprando camisa vermelha', () => {

        Login.verificaCampoVazioUsuario();

        Login.preencherLogin();

        camisaVermelha.verificaExistencia();

        camisaVermelha.addAoCarrinho();

        camisaVermelha.verificaItemNoCarrinho();

        camisaVermelha.preencheDadosDaCompra();

        camisaVermelha.verificaItemNaListaFinal();

        camisaVermelha.finalizaCompra();


        camisaVermelha.verificaMsgErroCampoVazioEmDadosDeCompra();





    });


    it('comprando bolsa', () => {


        Login.preencherLogin();

        bolsa.verificaExistenciaBolsa();

        bolsa.addAoCarrinho();

        bolsa.verificaItemNoCarrinho();

        bolsa.preencheDadosDaCompra();

        bolsa.verificaItemNaListaFinal();

        bolsa.finalizaCompra();



    });

    it('compra produtos com preco menor p/ maior', () => {


        Login.preencherLogin();

        produtosMenorPreco.selecionaFiltro();

        produtosMenorPreco.addProdutosMaisBaratosAoCarrinho();

        produtosMenorPreco.verificaItensNoCarrinho();

        produtosMenorPreco.preencheDadosDasCompras();

        produtosMenorPreco.verificaItensNaListaFinal();

        produtosMenorPreco.finalizaCompras();

    });

});