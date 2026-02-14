// Utils
import { prisma } from "../../../lib/db/prisma.ts";

// Types
import type { Prisma } from "../../../generated/prisma/client.ts";

class CharactersRepository {
    // Crear personaje
    createCharacter = async (data: Prisma.CharacterCreateInput) => {
        return await prisma.character.create({
            data: data,
        });
    };

    // Buscar todos los personajes
    findAll = async () => {
        return await prisma.character.findMany();
    };

    // Encontrar un personaje por ID unico
    findById = async (id: number) => {
        return await prisma.character.findUnique({
            where: { id },
        });
    };
}

// Se exporta una unica instancia
export const charactersRepository = new CharactersRepository();
