import { useState, type FormEvent } from "react";

// Services
import characterService from "../../services/characterService";

// Context
import { useAlertContext } from "../../context/AlertContext";

// Hooks
import charactersHook from "../characters/charactersHook";

// Types
import type { createCharacterProps } from "../../types/characters";

const characterFormHook = () => {
    // Hook para manejar el feedback de la creación del personaje
    const { handleStatusAlert } = useAlertContext();

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

    // Función para agregar una película al personaje
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
        // Evitamos que la página se recargue al enviar el formulario
        event.preventDefault();

        console.log("Datos del personaje a crear:", createdCharacter);
        const response =
            await characterService.createCharacter(createdCharacter);

        if (response.status === "error") {
            handleStatusAlert({
                message: response.message,
                type: "error",
            });
            return;
        }

        console.log("Respuesta del servicio:", response);

        // Mostramos un mensaje de éxito
        handleStatusAlert({
            message: "Personaje creado exitosamente",
            type: "success",
        });
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
