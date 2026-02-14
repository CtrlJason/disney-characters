import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../lib/errors/ApiErros.ts";

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    if (err instanceof ApiError) {
        console.error(`✖️  Código ${err.statusCode} - ${err.message}`);

        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    // Debug del error en servidor
    console.error("❌ Error en el servidor: ", err);
    res.status(500).json({
        success: false,
        message: "Error Interno en el servidor",
    });
};
