const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');

const LoginPage = require('../pages/login.page');
const ProductsPage = require('../pages/products.page');
const CartPage = require('../pages/cart.page');

class Base extends World {

    async abrir_browser() {

        const browsers = { chromium, firefox, webkit };
        const browser_name = process.env.BROWSER || 'chromium';

        this.browser = await browsers[browser_name].launch({
            headless: process.env.HEADLESS !== 'false'
        });

        this.context = await this.browser.newContext({
            baseURL: 'https://www.saucedemo.com'
        });

        this.page = await this.context.newPage();

        this.loginPage = new LoginPage(this.page);
        this.productsPage = new ProductsPage(this.page);
        this.cartPage = new CartPage(this.page);

    }

    async fechar_browser(){

        if(this.context) await this.context.close();
        if(this.browser) await this.browser.close();

    }

}

setWorldConstructor(Base);
