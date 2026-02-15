// Services
import getAllCharacters from "../../services/disneyService";

// Hooks
import { useState, useEffect } from "react";
import { useAlertContext } from "../../context/AlertContext";

// Types
import type { charactersProps } from "../../types/characters";
import characterService from "../../services/characterService";
const charactersHook = () => {
    const [charactersApiDisney, setCharactersApiDisney] = useState<
        charactersProps[]
    >([]);

    const [charactersLocal, setCharactersLocal] = useState<charactersProps[]>(
        [],
    );

    const { status } = useAlertContext();

    // personajes desde la API de Disney
    const loadCharactersDisney = async () => {
        const characters = await getAllCharacters();
        setCharactersApiDisney(characters);
    };
    // personajes desde la API local
    const loadCharactersLocal = async () => {
        const characters = await characterService.getAllCharacters();
        setCharactersLocal(characters);
    };

    // Lista de películas sin duplicados
    const filmsList = charactersApiDisney.reduce((acc: string[], character) => {
        character.films.map((film) => {
            if (!acc.includes(film)) {
                acc.push(film);
            }
        });
        return acc;
    }, []);

    // Carga de personajes
    useEffect(() => {
        if (status.type === "success" || status.type === "idle") {
            console.log("Cargando personajes...");
            loadCharactersDisney();
            loadCharactersLocal();
        }
    }, [status]);

    const numberSelectCharacter = () => {
        if (charactersApiDisney.length > 8) {
            return 8;
        } else {
            return charactersApiDisney.length;
        }
    };

    return {
        charactersApiDisney,
        charactersLocal,
        filmsList,
        numberSelectCharacter,
    };
};

export default charactersHook;
