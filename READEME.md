# Gestor API

### Como rodar o projeto

execute o comando na pasta raiz:

```bash
docker build -t gestor:latest .
```

verifique as imagens disponiveis:

```bash
 docker images
```

execute a api

```bash
 docker run -p 8000:3000 gestor
```