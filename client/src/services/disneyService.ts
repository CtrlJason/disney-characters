const API_URL = "https://api.disneyapi.dev/character";

// Método que obtiene todos los personajes de la API de Disney
const getAllCharacters = async () => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al obtener los personajes");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return [];
    }
};

export default getAllCharacters;
