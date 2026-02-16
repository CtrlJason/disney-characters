import { characterService } from "../services/character.service.ts";

// Types
import type { Request, Response } from "express";
import type { Prisma } from "../../../generated/prisma/client.ts";

export const createCharacter = async (req: Request, res: Response) => {
    const data = req.body as Prisma.CharacterCreateInput;

    await characterService.createCharacter(data);

    res.status(201).json({
        success: true,
        message: "Personaje creado con exito",
    });
};

export const getAllCharacters = async (req: Request, res: Response) => {
    const chartacters = await characterService.getAllCharacters();

    res.status(200).json({
        success: true,
        message: "Usuarios obtenidos exitosamente",
        data: chartacters,
    });
};

export const getCharacterById = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    const character = await characterService.getById(parseInt(id)); // Se transforma el ID a int para que prisma lo pueda leer

    res.status(200).json({
        success: true,
        message: "Usuario obtenido con exito",
        data: character,
    });
};
