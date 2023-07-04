/// <reference types="cypress" />

it ("cy.get() - Selecionando Elementos", () => {
     cy.visit('?id_product=2&controller=category')
     .get('#conteudo > div:nth-child(1) > a > span.botaoAzul.configBotao')
 })