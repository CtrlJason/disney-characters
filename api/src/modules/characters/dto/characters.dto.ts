import { body, param } from "express-validator";

export const createCharacterDto = [
    body("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isString()
        .withMessage("El nombre debe ser un string"),
    body("date")
        .notEmpty()
        .withMessage("La fecha de creación es obligatorio")
        .isDate()
        .withMessage("La fecha debe ser estar en un formato valido"),
    body("description")
        .notEmpty()
        .withMessage("La descripción es obligatorio")
        .isString()
        .withMessage("La descripcion debe ser un string"),
    body("image")
        .notEmpty()
        .withMessage("El Url es obligatorio")
        .isString()
        .withMessage("La URL debe ser un string"),
];

export const getCharacterByIdDto = [
    param("id").isNumeric().withMessage("El ID debe ser numérico"),
];
