# Gestor API

## Pre requisitos
- Ter o nodeJS
- Ter o yarn ou npm

## Como executar o projeto no terminal

 1- Faça o clone do projeto
 2- Instale as dependências
 3- Rode o proteto

 ## Como rodar o projeto no docker

 1- Construa o container
 ```bash
 docker-compose build
 ```
 2- Rode a imagem
 ```bash
docker-compose up -d
```

### Comandos Extras
```bash
docker-compose stop
docker-compose start
```
## Lista de Endpoints de exemplo

http://localhost:8000/transactions/30
http://localhost:8000/transactions/?type=0&month=3&year=2023
