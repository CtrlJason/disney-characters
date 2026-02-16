// Utils
import { prisma } from "../../../lib/db/prisma.ts";

// Types
import type { Prisma } from "../../../generated/prisma/client.ts";

/**
 * Capa de acceso a datos para la entidad Character
 * Maneja todas las operaciones de base de datos relacionadas con personajes
 */
class CharactersRepository {
    /**
     * Crea un nuevo personaje en la base de datos
     * 
     * @param data - Datos del personaje a crear
     * @returns El personaje creado
     */
    createCharacter = async (data: Prisma.CharacterCreateInput) => {
        return await prisma.character.create({
            data: data,
        });
    };

    /**
     * Obtiene todos los personajes de la base de datos
     * 
     * @returns Array con todos los personajes
     */
    findAll = async () => {
        return await prisma.character.findMany();
    };

    /**
     * Busca un personaje por su ID único
     * 
     * @param id - ID del personaje a buscar
     * @returns El personaje encontrado o null si no existe
     */
    findById = async (id: number) => {
        return await prisma.character.findUnique({
            where: { id },
        });
    };
}

// Se exporta una unica instancia
export const charactersRepository = new CharactersRepository();
