# AC Training - Backend

API REST para una aplicación de gestión de entrenamientos entre un entrenador personal y sus clientes.

Proyecto académico desarrollado para la materia TP2.

## Funcionalidades

- Registro y login de usuarios con autenticación JWT (token guardado en cookie).
- Roles diferenciados: **trainer** y **cliente**.
- CRUD completo de rutinas (solo el trainer puede gestionarlas).
- Cada cliente puede consultar las rutinas que le fueron asignadas.
- Middleware de autenticación y autorización por rol.

## Stack técnico

- **Node.js** + **Express** como servidor.
- **Sequelize** como ORM.
- **SQL Server** como base de datos.
- **JSON Web Tokens (JWT)** para autenticación.
- **bcrypt** para hashear contraseñas.
- **cookie-parser** para manejar cookies.

## Estructura del proyecto

```
2026-1C-PNT2-TP2-APP-AC-Training/
├── Models/         # Modelos de Sequelize (User, Role, Rutina)
├── services/       # Lógica de negocio
├── controllers/    # Handlers de los endpoints HTTP
├── container/      # Inyección de dependencias
├── router/         # Definición de rutas
├── middlewares/    # Autenticación y autorización
├── utils/          # JWT helpers
├── connection/     # Configuración de Sequelize
├── index.js        # Punto de entrada
├── package.json
├── .env            # NO se sube
└── .env.example    # Plantilla
```

## Cómo correr el proyecto

### Requisitos

- Node.js instalado.
- SQL Server corriendo (con SQL Server Management Studio para administrarlo).
- Postman (o similar) para probar los endpoints.

### Pasos

**1. Clonar el repo**

```bash
git clone https://github.com/sofisolerort/2026-1C-PNT2-TP2-APP-AC-Training.git
cd 2026-1C-PNT2-TP2-APP-AC-Training
```

**2. Instalar dependencias**

```bash
npm install
```

**3. Configurar las variables de entorno**

Copiá `.env.example` y renombralo a `.env`:

```bash
copy .env.example .env
```

Completá los valores con los datos de tu SQL Server local:

```
DB_HOST=localhost
DB_PORT=1433
DB_NAME=PersonalTrainerDB
DB_USER=tu_usuario_sql
DB_PASSWORD=tu_password_sql
SECRET=tu_secret_para_jwt
```

**4. Crear la base de datos**

En SQL Server Management Studio, ejecutá:

```sql
CREATE DATABASE PersonalTrainerDB;
```

**5. Arrancar el servidor**

```bash
npm run dev
```

Si ves "Conexión a SQL Server establecida correctamente." y "Server corriendo en http://localhost:3000", está todo OK.

Al arrancar, Sequelize crea automáticamente las tablas `Users`, `Roles` y `Rutinas`.

**6. Cargar los roles iniciales**

En SSMS, ejecutá:

```sql
USE PersonalTrainerDB;
INSERT INTO Roles (name, createdAt, updatedAt) VALUES ('trainer', GETDATE(), GETDATE());
INSERT INTO Roles (name, createdAt, updatedAt) VALUES ('cliente', GETDATE(), GETDATE());
```

Verificá:

```sql
SELECT * FROM Roles;
```

Deberías ver dos filas: trainer (id=1) y cliente (id=2).

## Endpoints disponibles

### Públicos

| Método | Ruta         | Descripción              |
| ------ | ------------ | ------------------------ |
| POST   | /users       | Crear usuario (register) |
| POST   | /users/login | Iniciar sesión           |

### Requieren login

| Método | Ruta               | Descripción                           |
| ------ | ------------------ | ------------------------------------- |
| GET    | /users/me          | Datos del usuario logueado            |
| POST   | /users/logout      | Cerrar sesión                         |
| GET    | /rutinas/mi-rutina | Rutinas asignadas al cliente logueado |

### Solo trainer (roleId = 1)

| Método | Ruta         | Descripción               |
| ------ | ------------ | ------------------------- |
| GET    | /users       | Listar todos los usuarios |
| GET    | /users/:id   | Ver un usuario por id     |
| GET    | /rutinas     | Listar todas las rutinas  |
| GET    | /rutinas/:id | Ver una rutina por id     |
| POST   | /rutinas     | Crear rutina              |
| PUT    | /rutinas/:id | Actualizar rutina         |
| DELETE | /rutinas/:id | Eliminar rutina           |

## Autor

Sofía Soler
