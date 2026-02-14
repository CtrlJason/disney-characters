import { Router } from "express";

// Middleware
import { validate } from "../../middlewares/validate.ts";

// DTOs
import {
    createCharacterDto,
    getCharacterByIdDto,
} from "../../modules/characters/dto/characters.dto.ts";

// Routes
import {
    createCharacter,
    getAllCharacters,
    getCharacterById,
} from "../../modules/characters/controller/character.controller.ts";

/** Crud de personajes Disney
 *
 * * Post: ("/") Crear un unico personaje
 * * Get: ("/") Obtener a todos los personajes registrados
 * * Get ID: ("/:id") Obtener un personaje especifico
 */
const router = Router();

router.post("/", createCharacterDto, validate, createCharacter);

router.get("/", getAllCharacters);

router.get("/:id", getCharacterByIdDto, validate, getCharacterById);

export default router;
