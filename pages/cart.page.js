const { expect } = require('@playwright/test');

class CartPage{

    constructor(page){

        this.page = page;

    }

    async verificar_nome(produto){

        await expect(
            this.page.locator('.inventory_item_name')
        ).toHaveText(produto);

    }

    async verificar_preco(preco){

        await expect(
            this.page.locator('.inventory_item_price')
        ).toHaveText(preco);

    }

    async verificar_quantidade(qtd){

        await expect(
            this.page.locator('.cart_quantity')
        ).toHaveText(qtd);

    }

}

module.exports = CartPage;