Cenário 1: Buscar um Pókemon

Dado que o usuário está na página Home
E o campo de busca esteja limpo
Quando o usuário digitar "togepi"
E clicar no botão "Consultar API"
Então o sistema deve consultar a API pelo nome "togepi"
E exibir o link "Ver mais detalhes"

Cenário 2: Buscar um Pókemon inexistente

Dado que o usuário está na página Home
E o campo de busca esteja limpo
Quando o usuário digitar um nome de Pókemon inexistente
E clicar no botão "Consultar API"
Então o sistema deve exibir uma mensagem de erro
E exibir o link "Ver mais detalhes"
