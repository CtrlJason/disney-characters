import "dotenv/config";

import express from "express"

// Config Prisma
import { prisma } from "./src/lib/prisma.ts";

// Routes
import router from "./src/routes/routes.ts"

// Types
import type { Request, Response } from "express"

const app = express()

// Puerto
const PORT = process.env["PORT"] || 3001

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "API funcionando ✅" })
})

// Rutas
app.use("/api", router)

app.listen(PORT, async () => {
    try {
        await prisma.$connect()
        console.log("✅ Conexion a la base de datos (PostgreSQL) exitosa")
        console.log(`⚡ Servidor ejecutandose en el puerto: http://localhost:${PORT}`)
    } catch (error) {
        console.error("Error conectando a MongoDB: ", error)
        process.exit(1)
    }
})