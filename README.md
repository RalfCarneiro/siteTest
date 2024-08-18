# Geek QA Gear

Este é um projeto para fins de testes automatizados que utiliza Docker para facilitar o desenvolvimento e a execução.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado em sua máquina.

## Configuração do Projeto

### 1. Clone o Repositório
Abra o terminal do VS Code (ou qualquer terminal) e clone o repositório.
- git clone https://github.com/RalfCarneiro/siteTest.git
- acesse a raiz do projeto

### 2. Construa e Inicie os Contêineres
No terminal do VS Code, execute o seguinte comando para construir e iniciar os contêineres:
- docker-compose up --build

### 3. Acesse a Aplicação
Depois que os contêineres estiverem rodando, você pode acessar a aplicação no seu navegador. Abra o navegador e vá para:
- http://localhost

### 4. Parar e remover os Contêiners
Para parar e remover os conteiners, use o comando:
- docker-compose down


#### Estrutura Docker
docker-compose.yml: Arquivo de configuração do Docker Compose.

Dockerfile: Arquivo de configuração para criar a imagem Docker.

nginx.conf: Arquivo de configuração do Nginx.

## Para realizar os testes:
- 1° - Faça um fork do repositório.
- 2° - Necessário a escrita dos casos de testes.
- 3° - Crie uma branch para seus testes.
- 4° - Faça suas alterações
- 5° - Faça um push para a branch
- 6° - Faça um fork do repositório.
- 7° - Abra um Pull Request.

# Tecnologias:
o Framework: 
- Cypress, 
- Selenium,
- Robot
- Playwright.

## Readme
O documento deve com orientações de como instalar o ambiente e executar os testes, assim como os cenários e o objetivo dos testes automatizados.

## Licença
Este projeto é licenciado sob a Licença MIT.

## Contato
Para qualquer dúvida ou problema, entre em contato com Ralf Carneiro.

Boa Sorte!
