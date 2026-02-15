// Services
import getAllCharacters from "../../services/disneyService";

// Hooks
import { useState, useEffect } from "react";

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

    // Carga de personajes desde la API de Disney
    const loadCharactersDisney = async () => {
        const characters = await getAllCharacters();
        setCharactersApiDisney(characters.data);
    };
    // Carga de personajes desde la API local
    const loadCharactersLocal = async () => {
        const characters = await characterService.getAllCharacters();
        setCharactersLocal(characters);
    };

    useEffect(() => {
        loadCharactersLocal();
        loadCharactersDisney();
    }, []);

    const numberSelectCharacter = () => {
        if (charactersApiDisney.length > 8) {
            return 8;
        } else {
            return charactersApiDisney.length;
        }
    };

    return { charactersApiDisney, charactersLocal, numberSelectCharacter };
};

export default charactersHook;
