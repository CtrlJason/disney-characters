import { Router } from "express";

// Routes
import { CreateCharacter, GetAllCharacters, GetCharacterByID } from "../../modules/characters/controllers/character.controller.ts";

/** Crud de personajes Disney
 * 
 * * Post: ("/") Crear un unico personaje
 * * Get: ("/") Obtener a todos los personajes registrados
 * * Get ID: ("/:id") Obtener un personaje especifico
 */
const router = Router();

router.post("/", CreateCharacter)
router.get("/", GetAllCharacters)
router.get("/:id", GetCharacterByID)

export default router