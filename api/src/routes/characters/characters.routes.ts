import { Router } from "express";

// Routes
import {
    createCharacter,
    getAllCharacters,
    getCharacterByID,
} from "../../modules/characters/controller/character.controller.ts";

/** Crud de personajes Disney
 *
 * * Post: ("/") Crear un unico personaje
 * * Get: ("/") Obtener a todos los personajes registrados
 * * Get ID: ("/:id") Obtener un personaje especifico
 */
const router = Router();

router.post("/", createCharacter);
router.get("/", getAllCharacters);
router.get("/:id", getCharacterByID);

export default router;
