# Disney Characters

Una aplicación web moderna para explorar y gestionar personajes de Disney. Cuenta con una interfaz intuitiva que permite visualizar, buscar y crear información sobre tus personajes Disney favoritos.

## 🎯 Características

- 📊 Visualización de personajes Disney desde API externa
- 🎨 Interfaz moderna y responsive
- ➕ Crear nuevos personajes personalizados
- 💾 Almacenamiento persistente en base de datos PostgreSQL
- 🎬 Información de películas y descripciones

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Docker** - Para ejecutar el contenedor de PostgreSQL
- **Node.js v24 (LTS)** - [Descargar aquí](https://nodejs.org/)
- **npm** - Incluido con Node.js

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/CtrlJason/disney-characters
cd disney-character
```

### 2. Levantar la Base de Datos (Docker)

Navega a la carpeta de Docker Compose:

```bash
cd api/docker/postgresql
```

#### En Linux/macOS:

```bash
docker-compose up -d
```

#### En Windows (PowerShell):

```powershell
docker-compose up -d
```

Este comando iniciará el contenedor de PostgreSQL. La base de datos estará lista para usar.

### 3. Configurar Variables de Entorno

En la carpeta `api/`, crea el archivo `.env` copia el contenido del archivo `.env.example` a `.env`:

```bash
cd ../../..
cd api
cp .env.example .env
```

Luego edita el archivo `.env` con tus configuraciones si es necesario.

### 4. Instalar Dependencias del Backend

Dentro de la carpeta `api/`:

```bash
npm install
```

### 5. Iniciar el Servidor Backend

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000` (o el puerto configurado)

### 6. Instalar Dependencias del Frontend

En una nueva terminal, navega a la carpeta `client/`:

```bash
cd ../client
npm install
```

### 7. Iniciar el Servidor Frontend

```bash
npm run dev
```

## 🌐 Acceder a la Aplicación

Una vez que ambos servidores estén corriendo, accede a la aplicación en:

```
http://localhost:5173/
```

⚠️ **Importante**: Asegúrate de que el puerto **5173** esté libre, de lo contrario la aplicación no se ejecutará correctamente debido a las restricciones de CORS del backend.

## 📁 Estructura del Proyecto

```
disney-character/
├── api/                          # Backend (Node.js + Express)
│   ├── src/
│   │   ├── modules/             # Módulos de negocio
│   │   ├── lib/                 # Utilidades
│   │   ├── middlewares/         # Middlewares
│   │   └── routes/              # Rutas de API
│   ├── prisma/
│   │   ├── schema.prisma        # Esquema de BD
│   │   └── migrations/          # Migraciones
│   ├── docker/
│   │   └── postgresql/
│   │       └── docker-compose.yml
│   └── .env.example
│
└── client/                       # Frontend (React + TypeScript)
    ├── src/
    │   ├── components/          # Componentes React
    │   ├── pages/               # Páginas
    │   ├── hooks/               # Hooks personalizados
    │   ├── services/            # Servicios API
    │   ├── styles/              # Estilos
    │   └── types/               # Tipos TypeScript
    └── package.json
```

## 🛠 Comandos Disponibles

### Backend (carpeta `api/`)

| Comando       | Descripción                           |
| ------------- | ------------------------------------- |
| `npm run dev` | Inicia el servidor en modo desarrollo |
| `npm start`   | Inicia el servidor en producción      |

### Frontend (carpeta `client/`)

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Inicia el servidor Vite en modo desarrollo |
| `npm run build`   | Compila el proyecto para producción        |
| `npm run preview` | Vista previa de la compilación             |

## 🐛 Solución de Problemas

### Docker no está iniciado

Si intentas ejecutar `npm run dev` en el backend sin tener Docker iniciado, obtendrás un error de conexión a la base de datos como este:

```
Error conectando a PostgreSQL: PrismaClientKnownRequestError:
Invalid 'prisma.$queryRaw()' invocation:
```

**Solución:**

1. Asegúrate de que Docker está corriendo en tu sistema
2. Levanta el contenedor de PostgreSQL:
    ```bash
    cd api/docker/postgresql
    docker-compose up -d
    ```
3. Verifica que el contenedor está activo:
    ```bash
    docker ps
    ```
4. **Detén el servidor backend** (presiona `Ctrl+C` en la terminal donde está corriendo)
5. Una vez que el contenedor de PostgreSQL esté corriendo, inicia el servidor backend nuevamente:
    ```bash
    npm run dev
    ```

### La base de datos no se conecta

- Verifica que Docker esté corriendo
- Asegúrate de que el contenedor PostgreSQL está activo: `docker ps`
- Revisa las variables de entorno en `.env`

### CORS errors

- Asegúrate de que el frontend está en `http://localhost:5173`
- Verifica que el backend está corriendo correctamente
- Revisa la configuración de CORS en el backend

## 📝 Notas

- La aplicación utiliza **Prisma** como ORM para la gestión de la base de datos
- El frontend está construido con **React** + **TypeScript** + **Tailwind CSS**
- El backend usa **Express.js** con **TypeScript**

## 📄 Licencia

Este proyecto es de código abierto.

## 👨‍💻 Autor

**CtrlJason** - [GitHub](https://github.com/CtrlJason)
