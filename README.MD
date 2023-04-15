# Full Cycle - Docker Desafio 2

Essa é uma aplicação simples que utiliza o Node.js, Express, MySQL e Docker. A aplicação conecta o nginx como proxy reverso em um Node.JS e um banco de dados MySQL e ao entrar no localhost:8080 ele mostra uma página HTML simples e a cada atualização insere novamente o usuário.

## Passo a passo
Para rodar a aplicação localmente, só será necessário possuir o Docker instalado na máquina. Uma vez instalado, ir no diretório raiz do projeto e rodar o seguinte comando:

``docker-compose up``

Isso iniciará os containers para a aplicação e banco de dados. A aplicação ficará disponível em http://localhost:8080