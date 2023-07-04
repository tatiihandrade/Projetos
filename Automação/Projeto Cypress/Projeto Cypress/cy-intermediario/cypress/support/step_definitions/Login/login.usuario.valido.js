/// <reference types="cypress" />

/*global Then, When, Given */


When ('inserir os dados de login com usuario valido', () => {
        cy.get('input[type="text"]').type('ph3a')
})

And ('inserir a senha',() =>{
        cy.get('.dadosLogin > [type="password"]').type('piratafast152')
})

And ('clicar para fazer login',() => {
    cy.get('#btn_entrar a').click()
})

Then ('o sistema realiza login com sucesso',() => {
   
})