import { useState, type FormEvent } from "react";

// Services
import characterService from "../../services/characterService";

// Hooks
import charactersHook from "../characters/charactersHook";

// Types
import type { createCharacterProps } from "../../types/characters";

const characterFormHook = () => {
    // Estado para almacenar los datos del personaje
    const [createdCharacter, setCreatedCharacter] =
        useState<createCharacterProps>({
            name: "",
            imageUrl: "",
            description: "",
            films: [],
            date: "",
        });

    // Obtenemos la lista de películas desde el hook de personajes
    const { filmsList } = charactersHook();

    const addFilmToCharacter = (film: string) => {
        if (!createdCharacter.films.includes(film)) {
            setCreatedCharacter({
                ...createdCharacter,
                films: [...createdCharacter.films, film],
            });
        }
        console.log("Personajes agregados:", createdCharacter.films);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Datos del personaje a crear:", createdCharacter);
        const response =
            await characterService.createCharacter(createdCharacter);
        console.log("Respuesta del servicio:", response);
    };

    return {
        createdCharacter,
        setCreatedCharacter,
        filmsList,
        addFilmToCharacter,
        handleSubmit,
    };
};

export default characterFormHook;
