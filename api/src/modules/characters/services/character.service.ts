// Repository
import { CharactersRepository } from "../repositories/characters.repository.ts";

// Utility http errors
import { ApiError } from "../../../lib/errors/ApiErros.ts";

const respository = new CharactersRepository();

export class CharacterService {
    /** Obtiene a todos los personajes
     *
     * @returns all characters
     */
    getAllCharacters = async () => {
        const charactersExist = await respository.findAll;

        if (!charactersExist) {
            throw new ApiError(404, "No existen personajes registrados");
        }
    };

    /** Obtiene un personaje por su ID
     *
     * @param id
     * @returns character
     */
    getById = async (id: number) => {
        return await respository.findById(id);
    };

    /** Crea un nuevo personaje
     *
     * @param data (Name, dete, description, image)
     * @returns new character
     */
    createCharacter = async (data: any) => {
        return await respository.createCharacter(data);
    };
}
