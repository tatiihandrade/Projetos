Feature: Login 

Eu como usuário, gostaria de fazer login para acessar o sistema

Scenario: Login com usuario Valido, pressionando enter
Given iniciando login
When inserir os dados de login com usuario valido
And inserir a senha
And clicar para fazer login
Then o sistema realiza login com sucesso