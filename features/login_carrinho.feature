Feature: Compra de produtos

    Esquema do Cenario: Adicionar produto ao carrinho

        Dado que estou no site SauceDemo

        Quando realizo login com usuario "<usuario>" e senha "<senha>"

        E adiciono o produto "<produto>"

        E acesso o carrinho

        Entao verifico o nome "<produto>"

        E verifico o preco "<preco>"

        E verifico a quantidade "1"

    Exemplos:

        | usuario       | senha         | produto                     | preco  |
        | standard_user | secret_sauce  | Sauce Labs Backpack         | $29.99 |
        | standard_user | secret_sauce  | Sauce Labs Bike Light       | $9.99  |