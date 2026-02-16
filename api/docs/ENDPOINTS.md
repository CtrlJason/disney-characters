# Documentación de Endpoints - Disney Characters API

## 📌 URL Base

```
http://localhost:3000/api
```

---

## 👥 Personajes (Characters)

### 1. Obtener Todos los Personajes

**Endpoint:** `GET` `/characters`

**Descripción:** Obtiene la lista completa de todos los personajes registrados en la base de datos.

**Parámetros:** Ninguno

**Ejemplo de Request:**

```http
GET http://localhost:3000/api/characters
```

**Ejemplo de Response (200 OK):**

```json
{
    "success": true,
    "message": "Usuarios obtenidos exitosamente",
    "data": [
        {
            "id": 1,
            "name": "Mickey Mouse",
            "date": "1928-11-18",
            "description": "El ratón más famoso del mundo",
            "imageUrl": "https://example.com/mickey.jpg",
            "films": ["Fantasía", "Steamboat Willie"]
        },
        {
            "id": 2,
            "name": "Minnie Mouse",
            "date": "1928-11-18",
            "description": "La novia de Mickey Mouse",
            "imageUrl": "https://example.com/minnie.jpg",
            "films": ["Fantasía", "Mickey's Amigos"]
        }
    ]
}
```

**Códigos de Estado:**

- `200 OK` - Personajes obtenidos exitosamente
- `500 Internal Server Error` - Error en el servidor

---

### 2. Obtener un Personaje por ID

**Endpoint:** `GET` `/characters/:id`

**Descripción:** Obtiene los detalles de un personaje específico por su ID.

**Parámetros:**

- `id` (path parameter, required): ID del personaje (número entero)

**Validaciones:**

- El ID debe ser un número entero válido

**Ejemplo de Request:**

```http
GET http://localhost:3000/api/characters/1
```

**Ejemplo de Response (200 OK):**

```json
{
    "success": true,
    "message": "Usuario obtenido con exito",
    "data": {
        "id": 1,
        "name": "Mickey Mouse",
        "date": "1928-11-18",
        "description": "El ratón más famoso del mundo",
        "imageUrl": "https://example.com/mickey.jpg",
        "films": ["Fantasía", "Steamboat Willie"]
    }
}
```

**Códigos de Estado:**

- `200 OK` - Personaje obtenido exitosamente
- `400 Bad Request` - Validación fallida (ID inválido)
- `404 Not Found` - Personaje no encontrado
- `500 Internal Server Error` - Error en el servidor

---

### 3. Crear un Nuevo Personaje

**Endpoint:** `POST` `/characters`

**Descripción:** Crea un nuevo personaje en la base de datos.

**Parámetros:** (Body - JSON)

- `name` (string, required): Nombre del personaje
- `date` (string ISO 8601, required): Fecha de creación (formato: YYYY-MM-DD)
- `description` (string, required): Descripción del personaje
- `imageUrl` (string, required): URL de la imagen del personaje
- `films` (array de strings, required): Lista de películas en las que aparece el personaje (mínimo 1)

**Validaciones:**

- `name`: No puede estar vacío y debe ser string
- `date`: No puede estar vacío y debe ser una fecha válida en formato ISO 8601
- `description`: No puede estar vacío y debe ser string
- `imageUrl`: No puede estar vacío y debe ser string
- `films`: No puede estar vacío, debe ser array con al menos 1 elemento, y cada elemento debe ser string

**Ejemplo de Request:**

```http
POST http://localhost:3000/api/characters
Content-Type: application/json

{
  "name": "Donald Duck",
  "date": "1934-06-09",
  "description": "El pato de mal genio de Disney",
  "imageUrl": "https://example.com/donald.jpg",
  "films": ["El Tío Donald", "Quack Pack"]
}
```

**Ejemplo de Response (201 Created):**

```json
{
    "success": true,
    "message": "Personaje creado con exito"
}
```

**Códigos de Estado:**

- `201 Created` - Personaje creado exitosamente
- `400 Bad Request` - Validación fallida (campos requeridos vacíos o inválidos)
- `500 Internal Server Error` - Error en el servidor

**Errores de Validación Comunes:**

```json
{
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "El nombre es obligatorio",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "value": "1234",
            "msg": "La fecha debe ser estar en un formato valido",
            "path": "date",
            "location": "body"
        }
    ]
}
```

---

## 📊 Resumen de Endpoints

| Método | Endpoint          | Descripción                  |
| ------ | ----------------- | ---------------------------- |
| GET    | `/characters`     | Obtener todos los personajes |
| GET    | `/characters/:id` | Obtener personaje por ID     |
| POST   | `/characters`     | Crear nuevo personaje        |

---

## 🔐 Notas Importantes

- **Autenticación**: Actualmente no se requiere autenticación para acceder a los endpoints
- **CORS**: Los endpoints están configurados para aceptar requests desde `http://localhost:5173`
- **Content-Type**: Para POST, el header `Content-Type: application/json` es obligatorio
- **Validación**: Todos los datos enviados son validados en el servidor usando express-validator

---

## 🧪 Ejemplo de Uso Completo

### 1. Crear un nuevo personaje

```bash
curl -X POST http://localhost:3000/api/characters \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Goofy",
    "date": "1932-05-25",
    "description": "El mejor amigo de Mickey",
    "imageUrl": "https://example.com/goofy.jpg",
    "films": ["A Goofy Movie", "An Extremely Goofy Movie"]
  }'
```

### 2. Obtener todos los personajes

```bash
curl -X GET http://localhost:3000/api/characters
```

### 3. Obtener un personaje específico

```bash
curl -X GET http://localhost:3000/api/characters/1
```

---

## 📝 Estructura de Respuesta

Todas las respuestas siguen el siguiente formato:

```json
{
  "success": true/false,
  "message": "Descripción del resultado",
  "data": {} // Solo en respuestas GET exitosas
}
```
