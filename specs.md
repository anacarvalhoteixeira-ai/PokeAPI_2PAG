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
E o link "Ver mais detalhes" não será exibido

Cenário 3: Mudança de página

Dado que o usuário pesquisou um Pókemon existente
E o link "Ver mais detalhes" foi exibido
Quando o usuário clicar no link
Então o sistema deve redirecionar o usuário para a página "Detalhes"
E deve exibir as informações do Pókemon pesquisado

Cenário 4: Mudança de página pela navegação

Dado que o usuário está na página "Home"
Quando o usuário clicar no link "Detalhes" no menu de navegação
Então o sistema deve redirecionar para a página "Detalhes"
E deve exibir a mensagem "Aqui serão exibidas as informações do pokémon pesquisado."
E deve exibir o link "Voltar para Home"
