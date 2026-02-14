import express from "express"

// Routes
import router from "./routes/index.ts"

// Types
import type { Request, Response } from "express"

const app = express()

// Puerto
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "API funcionando ✅" })
})

// Rutas
app.use("/api", router)

app.listen(PORT, () => {
    console.log(`⚡ Servidor ejecutandose en el puerto: http://localhost:${PORT}`)
})