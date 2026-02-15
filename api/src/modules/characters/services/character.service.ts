// Repository
import { charactersRepository } from "../repositories/characters.repository.ts";

// Utility http errors
import { ApiError } from "../../../lib/errors/ApiErros.ts";

// Types
import type { Prisma } from "../../../generated/prisma/client.ts";

class CharacterService {
    /** Crea un nuevo personaje
     *
     * @param data (Name, dete, description, image)
     * @returns new character
     */
    createCharacter = async (data: Prisma.CharacterCreateInput) => {
        // Formateo de fecha a ISO 8601 para asegurar compatibilidad con la base de datos
        const formatedDate = new Date(data.date).toISOString();
        const newCharacter = await charactersRepository.createCharacter({
            ...data,
            date: formatedDate,
        });

        if (!newCharacter)
            throw new ApiError(400, "Hubo un error creando al personaje");

        return true;
    };

    /** Obtiene a todos los personajes
     *
     * @returns all characters
     */
    getAllCharacters = async () => {
        const characters = await charactersRepository.findAll();

        if (!characters.length)
            throw new ApiError(404, "No existen personajes registrados");

        return characters;
    };

    /** Obtiene un personaje por su ID
     *
     * @param id
     * @returns character
     */
    getById = async (id: number) => {
        const character = await charactersRepository.findById(id);

        if (!character) throw new ApiError(404, "El personaje no existe");

        return character;
    };
}

// Se exporta una unica instancia
export const characterService = new CharacterService();
