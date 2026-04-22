# PROJETO FINAL - Sistema de Consulta de Pokémon

**O PokéFinder é uma aplicação web front-end que permite aos usuários pesquisar e visualizar informações detalhadas de Pokémons em tempo real. O sistema utiliza a Fetch API para consumir dados da PokéAPI e gerencia a navegação entre páginas utilizando parâmetros de consulta.**


## FUNCIONALIDADES

**Consulta em Tempo Real:** Integração assíncrona com a PokéAPI para validação de existência do Pokémon.
**Interface Reativa:** O botão de busca é desativado durante a requisição para evitar múltiplas chamadas.
**Navegação Dinâmica:** Transferência de estado entre a página Home e Detalhes via URL.
**Renderização Dinâmica:** Construção de templates HTML via JavaScript para exibição de imagens e atributos (altura e peso).
**Design Dark Mode:** Estilização moderna com foco em contraste e legibilidade.


## TECNOLOGIAS/CONCEITOS APLICADOS

**HTML5 & CSS3:** Estruturação semântica e estilização avançada (Box Model, Transições, Flexbox/Center).
**JavaScript:**
**Fetch API:** Requisições HTTP e tratamento de promessas.
**DOM Manipulation:** Atualização dinâmica de conteúdo e controle de estados de botões.
**URLSearchParams:** Captura e tratamento de dados enviados pela URL.
**Template Literals:** Criação de componentes dinâmicos para a interface.


## COMO EXECUTAR O PROJETO

Clone o repositório ou baixe os arquivos.
Certifique-se de que os arquivos index.html, sobre.html, style.css e script.js estejam na mesma pasta.
Abra o arquivo index.html em qualquer navegador moderno.
(Opcional) Utilize a extensão **Live Server** no VS Code para uma experiência de desenvolvimento otimizada.


## TESTES REALIZADOS

**Validação de Input:** Verificação de comportamento com nomes em maiúsculas/minúsculas (convertidos via .toLowerCase()).
**Tratamento de Erros:** Exibição de alerta "Pokémon não encontrado" para entradas inválidas ou erros de rede.
**Persistência de Dados:** Garantia de que o parâmetro ?nome= na URL carrega os dados corretos na página de detalhes.
**Estado da UI:** Bloqueio do botão de busca (disabled) enquanto o fetch aguarda a resposta.
