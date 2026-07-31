const { expect } = require('@playwright/test');

class LoginPage{

    constructor(page){

        this.page = page;

        this.url = "/";

        this.usuario = '#user-name';
        this.senha = '#password';
        this.botaoLogin = '#login-button';

    }

    async acessar_site(){

        await this.page.goto(this.url);

    }

    async realizar_login(usuario, senha){

        await this.page.fill(this.usuario, usuario);
        await this.page.fill(this.senha, senha);

        await this.page.click(this.botaoLogin);

    }

}

module.exports = LoginPage;