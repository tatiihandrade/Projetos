Feature: Login da Pagina

 Realizar login no Datacob

 Scenario: Login de usuario
 Given Estou navegando na pagina login
 When informar meu email
    And preencher a senha
    And logar
 Then o sistema realizara autenticacao na pagina com sucesso



