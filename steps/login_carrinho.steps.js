const { Given, When, Then } = require('@cucumber/cucumber');

Given('que estou no site SauceDemo', async function () {

    await this.loginPage.acessar_site();

    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');

});

When('realizo login com usuario {string} e senha {string}', async function (usuario, senha) {

    await this.loginPage.realizar_login(usuario, senha);

    await this.productsPage.verificar_pagina_produtos();

});

When('adiciono o produto {string}', async function (produto) {

    await this.productsPage.adicionar_produto(produto);

});

When('acesso o carrinho', async function () {

    await this.productsPage.acessar_carrinho();

});

Then('verifico o nome {string}', async function (produto) {

    await this.cartPage.verificar_nome(produto);

});

Then('verifico o preco {string}', async function (preco) {

    await this.cartPage.verificar_preco(preco);

});

Then('verifico a quantidade {string}', async function (quantidade) {

    await this.cartPage.verificar_quantidade(quantidade);

});