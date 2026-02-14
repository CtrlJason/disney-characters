// Services
import getAllCharacters from "../../services/disneyService";

// Hooks
import { useState, useEffect } from "react";

// Types
import type { characterSlideProps } from "../../types/characters";

const charactersHook = () => {
    const [charactersApiDisney, setCharactersApiDisney] = useState<
        characterSlideProps[]
    >([]);

    useEffect(() => {
        const loadCharacters = async () => {
            const characters = await getAllCharacters();
            console.log(`Characters obtenidos:`, characters.data);
            setCharactersApiDisney(characters.data);
        };
        loadCharacters();
    }, []);

    const numberSelectCharacter = () => {
        if (charactersApiDisney.length > 5) {
            return 5;
        } else {
            return charactersApiDisney.length;
        }
    };

    return { charactersApiDisney, numberSelectCharacter };
};

export default charactersHook;
