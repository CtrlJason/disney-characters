import { Router } from "express";

// Routes
import characterRoutes from "./characters/characters.routes.ts"

const router = Router()

// Personajes Disney
router.use("/characters", characterRoutes)

export default router