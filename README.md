# Disney Characters

Una aplicación web moderna para explorar personajes de Disney. Cuenta con una interfaz intuitiva que permite visualizar y crear información sobre tus personajes Disney favoritos.

## 🎯 Características

- 📊 Visualización de personajes Disney desde API externa
- 🎨 Interfaz moderna y responsive
- ➕ Crear nuevos personajes
- 💾 Almacenamiento persistente en base de datos PostgreSQL
- 🎬 Información de películas y descripciones

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

### Docker

#### Para Windows:

- [Descargar Docker Desktop para Windows](https://docs.docker.com/desktop/install/windows-install/)

#### Para Linux (Ubuntu/Debian):

Ejecuta los siguientes comandos:

```bash
# Actualizar repositorios
sudo apt update

# Instalar paquetes necesarios
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Agregar la clave GPG de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Agregar repositorio de Docker
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Instalar Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Agregar usuario actual al grupo docker (opcional, para no usar sudo)
sudo usermod -aG docker $USER

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### Para macOS:

- [Descargar Docker Desktop para macOS](https://docs.docker.com/desktop/install/mac-install/)

### Node.js y npm

- **Node.js v24 (LTS)** - [Descargar aquí](https://nodejs.org/)
- **npm** - Incluido con Node.js

### ⚠️ Nota Importante para Windows

Si estás usando **PowerShell** y los comandos `npm` no se ejecutan correctamente, abre **CMD (Símbolo del sistema)** en su lugar. Algunos comandos pueden no funcionar correctamente en PowerShell por restricciones de ejecución de scripts.

**Cómo abrir CMD:**

1. Presiona `Win + R`
2. Escribe `cmd` y presiona Enter
3. Navega a la carpeta del proyecto y ejecuta los comandos desde allí

## 🚀 Instalación

### 1. Clonar el Repositorio

#### 1.1. Ejecutar el comando de clonación

```bash
git clone https://github.com/CtrlJason/disney-characters
cd disney-characters
```

### 2. Levantar la Base de Datos (Docker)

#### 2.1. Navegar a la carpeta de Docker Compose

```bash
cd api/docker/postgresql
```

#### 2.2. Ejecutar Docker Compose (Linux, macOS y Windows)

```bash
docker-compose up -d
```

Este comando iniciará el contenedor de PostgreSQL. La base de datos estará lista para usar.

### 3. Configurar Variables de Entorno

#### 3.1. Navegar a la carpeta api y crear archivo .env

```bash
cd ../../..
cd api
cp .env.example .env
```

#### 3.2. Editar las variables de entorno

Edita el archivo `.env` con tus configuraciones si es necesario.

### 4. Instalar Dependencias del Backend

#### 4.1. Navegar a la carpeta api

Dentro de la carpeta `api/`:

```bash
npm install
```

### 5. Ejecutar Migraciones de Prisma

#### 5.1. Ejecutar las migraciones de Prisma

Una vez que Docker esté levantado y las dependencias instaladas, ejecuta las migraciones:

```bash
npx prisma migrate dev
```

#### 5.2. Generar los tipos de Prisma

Luego genera los tipos y cliente de Prisma:

```bash
npx prisma generate
```

⚠️ **Importante**: Estos pasos son esenciales para evitar errores de importación en la API. La ejecución de estos comandos genera los archivos necesarios en la carpeta `src/generated/prisma/`.

### 6. Iniciar el Servidor Backend (API)

En la carpeta `api/`, ejecuta:

```bash
npm run dev
```

El servidor Backend (API) estará disponible en `http://localhost:3000` (o el puerto configurado)

### 7. Instalar Dependencias del Frontend

#### 7.1. Navegar a la carpeta client en una nueva terminal

En una **nueva terminal/CMD separada**, navega a la carpeta `client/` (Frontend):

```bash
cd ../client
npm install
```

### 8. Iniciar el Servidor Frontend (Client)

#### 8.1. Ejecutar el servidor Frontend en modo desarrollo

En la misma terminal del Frontend, ejecuta:

```bash
npm run dev
```

## 🌐 Acceder a la Aplicación

Una vez que ambos servidores estén corriendo (Backend en una terminal y Frontend en otra), accede a la aplicación en:

```
http://localhost:5173/
```

### Resumen de Terminales Necesarias:

1. **Terminal 1**: Docker (permanece corriendo)
2. **Terminal 2**: Backend/API - `npm run dev` en carpeta `api/`
3. **Terminal 3**: Frontend/Client - `npm run dev` en carpeta `client/`

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
