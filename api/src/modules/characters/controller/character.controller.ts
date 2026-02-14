import type { Request, Response } from "express";
import { CharacterService } from "../services/character.service.ts";

const characterService = new CharacterService();

export const createCharacter = (req: Request, res: Response) => {
    res.status(201).json({
        success: true,
        message: "Personaje creado con exito",
    });
};

export const getAllCharacters = (_req: Request, res: Response) => {
    const chartacters = characterService.getAllCharacters;

    res.status(200).json({
        success: true,
        message: "Usuarios obtenidos exitosamente",
        data: [chartacters],
    });
};

export const getCharacterByID = (req: Request, res: Response) => {
    const { id } = req.params;

    const character = characterService.getById(parseInt(id as string));

    res.status(200).json({
        success: true,
        message: "Usuario obtenido con exito",
        data: character,
    });
};
