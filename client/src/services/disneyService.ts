const API_URL = "https://api.disneyapi.dev/character";

// Types
import type { charactersProps } from "../types/characters";

// Método que obtiene todos los personajes de la API de Disney
const getAllCharacters = async (): Promise<charactersProps[]> => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al obtener los personajes");
        }

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return [];
    }
};

export default getAllCharacters;
