const { expect } = require('@playwright/test');

class ProductsPage{

    constructor(page){

        this.page = page;

        this.titulo = '.title';

        this.carrinho = '.shopping_cart_link';

    }

    async verificar_pagina_produtos(){

        await expect(
            this.page.locator(this.titulo)
        ).toHaveText('Products');

    }

    async adicionar_produto(produto){

        await this.page.locator('.inventory_item')
        .filter({
            has: this.page.locator('.inventory_item_name',{
                hasText: produto
            })
        })
        .locator('button')
        .click();

    }

    async acessar_carrinho(){

        await this.page.click(this.carrinho);

    }

}

module.exports = ProductsPage;