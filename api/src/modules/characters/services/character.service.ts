// Repository
import { CharactersRepository } from "../repositories/characters.repository.ts";

// Utility http errors
import { ApiError } from "../../../lib/errors/ApiErros.ts";

// Types
import type { Prisma } from "../../../generated/prisma/client.ts";

const respository = new CharactersRepository();

export class CharacterService {
    /** Crea un nuevo personaje
     *
     * @param data (Name, dete, description, image)
     * @returns new character
     */
    createCharacter = async (data: Prisma.CharacterCreateInput) => {
        const newCharacter = await respository.createCharacter(data);

        if (!newCharacter)
            throw new ApiError(400, "Hubo un error creando al personaje");

        return true;
    };

    /** Obtiene a todos los personajes
     *
     * @returns all characters
     */
    getAllCharacters = async () => {
        const characters = await respository.findAll();

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
        const character = await respository.findById(id);

        if (!character) throw new ApiError(404, "El personaje no existe");

        return character;
    };
}
