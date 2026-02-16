import { useState } from "react";

// Types
import type { charactersProps } from "../../types/characters";

const sliderHook = (disneyList: charactersProps[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const list = disneyList.slice(0, 8);

    // Función que devuelve los personajes visibles en el slider (previo, actual y siguiente)
    const getVisibleCharacter = () => {
        const prev = currentIndex === 0 ? list.length - 1 : currentIndex - 1;
        const current = currentIndex;
        const next = currentIndex === list.length - 1 ? 0 : currentIndex + 1;

        return [
            { ...list[prev], position: "left" },
            { ...list[current], position: "center" },
            { ...list[next], position: "right" },
        ];
    };

    // Manejo personaje anterior
    const handlePrev = () => {
        setCurrentIndex(
            currentIndex === 0 ? list.length - 1 : currentIndex - 1,
        );
    };

    // Manejo personaje siguiente
    const handleNext = () => {
        setCurrentIndex(
            currentIndex === list.length - 1 ? 0 : currentIndex + 1,
        );
    };

    // Selección directa de personaje
    const selectCharacter = (index: number) => {
        setCurrentIndex(index);
    };

    return {
        // Índice del personaje seleccionado
        currentIndex,

        // Funciones para manejar el slider
        handlePrev,
        handleNext,

        // Mostrar los personajes en el slider
        getVisibleCharacter,

        // Para el botón de arrastre
        listIndex: list.length,
        selectCharacter,
    };
};

export default sliderHook;
