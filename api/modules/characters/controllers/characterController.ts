import type { Request, Response } from "express";

export const CreateCharacter = (req: Request, res: Response) => {
    res.status(201).json({
        message: "Personaje creado con exito",
        data: []
    })
}

export const GetAllCharacters = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Usuarios obtenidos exitosamente",
        data: []
    });
}

export const GetCharacterByID = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Usuario obtenido con exito",
        data: {}
    });
}
