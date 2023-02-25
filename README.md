# Next.js OpenJira App

To run locally we need the db

```
docker-compose up -d
```

-d means **detached**

## MongoDb URL local:

mongodb://localhost:27017/entriesdb

## configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Reconstruir modulos de node

yarn install

## Llenar DB con info de prueba

llamar a :
`http://localhost:3000/api/seed `
# OpenJira
