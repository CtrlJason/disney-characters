import { characterService } from "../services/character.service.ts";

// Types
import type { Request, Response } from "express";
import type { Prisma } from "../../../generated/prisma/client.ts";

/**
 * Crea un nuevo personaje
 * 
 * @param req - Request de Express con los datos del personaje en el body
 * @param res - Response de Express
 * @returns JSON con mensaje de éxito y código 201
 * 
 * @throws Error 400 si hay validación incorrecta
 * @throws Error 500 si hay error en el servidor
 */
export const createCharacter = async (req: Request, res: Response) => {
    const data = req.body as Prisma.CharacterCreateInput;

    await characterService.createCharacter(data);

    res.status(201).json({
        success: true,
        message: "Personaje creado con exito",
    });
};

/**
 * Obtiene todos los personajes registrados
 * 
 * @param req - Request de Express
 * @param res - Response de Express
 * @returns JSON con lista de todos los personajes y código 200
 * 
 * @throws Error 404 si no hay personajes
 * @throws Error 500 si hay error en el servidor
 */
export const getAllCharacters = async (req: Request, res: Response) => {
    const chartacters = await characterService.getAllCharacters();

    res.status(200).json({
        success: true,
        message: "Usuarios obtenidos exitosamente",
        data: chartacters,
    });
};

/**
 * Obtiene un personaje específico por su ID
 * 
 * @param req - Request de Express con el ID del personaje en los params
 * @param res - Response de Express
 * @returns JSON con el personaje encontrado y código 200
 * 
 * @throws Error 404 si el personaje no existe
 * @throws Error 500 si hay error en el servidor
 */
export const getCharacterById = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    const character = await characterService.getById(parseInt(id)); // Se transforma el ID a int para que prisma lo pueda leer

    res.status(200).json({
        success: true,
        message: "Usuario obtenido con exito",
        data: character,
    });
};
