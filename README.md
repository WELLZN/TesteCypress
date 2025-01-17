# Testes Cypress

Este repositório contém testes automatizados feitos com Cypress. Os testes incluem a verificação da conclusão de etapas no sistema e a validação da listagem de usuários ativos.

## Como Rodar os Testes

1. Instale o Cypress e as dependências do projeto com o comando:  
   `npm install cypress --save-dev`
   
2. use o comando:  
   `npm install`
   
3. Para rodar os testes, use o comando `npx cypress open` para abrir a interface gráfica do Cypress e rodar os testes de forma interativa, ou use `npx cypress run` para rodar os testes em modo headless (sem interface gráfica).

Os testes disponíveis são:

- **EtapaConcluida.cy.js**: Verifica a conclusão de etapas no sistema.
- **usuariosAtivos.cy.js**: Valida a listagem de usuários ativos.

## Estrutura

Os testes estão localizados na pasta `cypress/e2e`, e a configuração do Cypress pode ser encontrada na pasta `cypress.config.js`.

