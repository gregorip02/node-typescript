# Typescript + Node

Esto pretende ser un nuevo esqueleto para desarrollar Rest APIs en node.js
con typescript.

## Requerimientos

- Docker
- Docker compose

## Iniciando

Levanta todo el entorno usando la configuración pre-establecida en el archivo
`docker-compose.yml`.

```bash
docker-compose up -d
```

Si quieres levantar el proyecto en modo desarrollo, crea un archivo llamado
`docker-compose.override.yml` con el siguiente contenido.

```yaml
version: "3.4"

services:
  app:
    command: ["npm", "run", "start:dev"]
```
