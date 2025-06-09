# Ejercicio para practicar servidores con Express.
## Fecha: 07/06-2025

## 🚀 Objetivo

Simular el comportamiento de la API original [dragonball-api.com](https://dragonball-api.com/api/characters) utilizando un servidor local y datos precargados.

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- ES Modules (`type: module` en `package.json`)

## 📦 Instalación y ejecución

1. Cloná este repositorio o descargá los archivos:
   ```bash
   git clone https://github.com/bruizdiaz/practica-07-06-2025.git
   cd express
   ```
2. Instalá las dependencias:

   ```bash
   npm install express
   ```
3. Iniciá el servidor:

   ```bash
   npm run dev
   ```
4. Accedé desde tu navegador:

   ```
   http://localhost:3000/api/characters – Lista completa de personajes.
   http://localhost:3000/api/characters/1 – Detalle de personaje por ID.
   ```

## 🔄 Endpoints disponibles
### GET /api/characters
Devuelve un objeto con una lista de 10 personajes:
   ```json
   {
  "items": [
    {
      "id": 1,
      "name": "Goku",
      "race": "Saiyan",
      "gender": "Male",
      ...
    },
    ...
  ]
   }
   ```
### GET /api/characters/:id
- Devuelve un personaje específico según su ID.

## ❌ Casos de error:
##### ID inválido (no numérico):
   ```json
{
  "message": "Invalid parameter: ID must be a number",
  "error": "Bad Request",
  "statusCode": 400
}
   ```
##### ID inexistente:
   ```json
{
  "message": "Character ID not found",
  "error": "Bad Request",
  "statusCode": 400
}
   ```
##### Ruta no existente:
   ```json

{
  "message": "No such file or directory'",
  "error": "Not Found",
  "statusCode": 404
}
   ```
