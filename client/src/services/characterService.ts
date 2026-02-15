// Types
import type { createCharacterProps } from "../types/characters";

const API_URL = "http://localhost:3000/api/characters";

class CharacterService {
    // Método que obtiene todos los personajes
    getAllCharacters = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error al obtener los personajes");
            }

            const result = await response.json();
            console.log("Personajes obtenidos:", result.data);

            return result.data;
        } catch (error) {
            console.error("Error al obtener los personajes:", error);
            return [];
        }
    };

    // Método que obtiene un personaje por su ID
    getCharacterById = async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/${id}`);

            if (!response.ok) {
                throw new Error("Error al obtener el personaje");
            }

            const result = await response.json();

            return result.data;
        } catch (error) {
            console.error("Error al obtener el personaje:", error);
            return null;
        }
    };

    // Método que crea un nuevo personaje
    createCharacter = async (
        character: createCharacterProps,
    ): Promise<{ message: string; status: string }> => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(character),
            });

            if (!response.ok) {
                return {
                    message: "Error al crear el personaje",
                    status: "error",
                };
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al crear el personaje:", error);
            throw error;
        }
    };
}

export default new CharacterService();
