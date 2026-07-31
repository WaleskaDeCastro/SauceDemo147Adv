const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60000);

Before(async function () {
    await this.abrir_browser();
});

After(async function () {
    await this.fechar_browser();
});