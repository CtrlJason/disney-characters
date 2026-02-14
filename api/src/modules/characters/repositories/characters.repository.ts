import { prisma } from "../../../lib/db/prisma.ts";

export class CharactersRepository {
    createCharacter = (data: any) => {
        prisma.character.create({
            data: data,
        });
    };

    findAll = () => {
        prisma.character.findMany();
    };

    findById = (id: number) => {
        prisma.character.findUnique({
            where: { id },
        });
    };
}
