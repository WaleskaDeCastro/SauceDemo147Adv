# Automação SauceDemo - Playwright + Cucumber + Page Objects

Projeto de automação web desenvolvido utilizando:

- Playwright
- Cucumber (BDD/Gherkin)
- JavaScript
- Page Objects

## Cenário automatizado

Fluxo de compra:

- Acessar SauceDemo
- Realizar login
- Selecionar produto
- Adicionar ao carrinho
- Acessar carrinho
- Validar nome do produto
- Validar preço
- Validar quantidade

## Massa de testes

Foram executados dois cenários utilizando Scenario Outline:

| Produto | Resultado |
|---|---|
| Sauce Labs Backpack | Passou |
| Sauce Labs Bike Light | Passou |