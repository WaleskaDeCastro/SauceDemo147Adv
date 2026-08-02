const { expect } = require('@playwright/test');

class ProductsPage{

    constructor(page){

        this.page = page;

        this.url = "/inventory.html";

        this.titulo = '[data-test="title"]';

        this.carrinho = '[data-test="shopping-cart-link"]';

    }

    async verificar_pagina_produtos(){

        await expect(
            this.page.locator(this.titulo)
        ).toHaveText('Products');

    }

    async adicionar_produto(produto){

        await this.page.locator('[data-test="inventory-item"]')
        .filter({
            has: this.page.locator('[data-test="inventory-item-name"]', {
                hasText: produto
            })
        })
        .getByRole('button')
        .click();

    }

    async acessar_carrinho(){

        await this.page.click(this.carrinho);

    }

}

module.exports = ProductsPage;