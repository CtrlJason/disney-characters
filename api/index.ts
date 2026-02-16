import "dotenv/config";

import express from "express";
import cors from "cors";

// Middlewares
import { errorHandler } from "./src/middlewares/errorHandler.ts";

// Config Prisma
import { prisma } from "./src/lib/db/prisma.ts";

// Routes
import router from "./src/routes/routes.ts";

// Types
import type { Request, Response } from "express";

/**
 * Inicialización de la aplicación Express
 * Configuración de middlewares, rutas y manejo de errores
 */
const app = express();

// Puerto de la aplicación
const PORT = process.env["PORT"] || 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "API funcionando ✅" });
});

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    }),
);

// Rutas
app.use("/api", router);

app.listen(PORT, async () => {
    try {
        // Query test para probar conectividad con la base de datos
        await prisma.$queryRaw`SELECT 1`;
        console.log("✅ Conexion a la base de datos (PostgreSQL) activa");
        console.log(
            `⚡ Servidor ejecutandose en el puerto: http://localhost:${PORT}`,
        );
    } catch (error) {
        console.error("Error conectando a Docker PostgreSQL: ", error);
        process.exit(1);
    }
});

// Middleware para manejar errores y excepciones.
app.use(errorHandler);
