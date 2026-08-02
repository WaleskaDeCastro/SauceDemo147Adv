const { expect } = require('@playwright/test');

class CartPage{

    constructor(page){

        this.page = page;

        this.url = "/cart.html";

    }

    async verificar_nome(produto){

        await expect(
            this.page.locator('[data-test="inventory-item-name"]')
        ).toHaveText(produto);

    }

    async verificar_preco(preco){

        await expect(
            this.page.locator('[data-test="inventory-item-price"]')
        ).toHaveText(preco);

    }

    async verificar_quantidade(qtd){

        await expect(
            this.page.locator('[data-test="item-quantity"]')
        ).toHaveText(qtd);

    }

}

module.exports = CartPage;