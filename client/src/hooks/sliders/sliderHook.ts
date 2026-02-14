import { useState } from "react";

// Types
import type { characterSlideProps } from "../../types/characters";

const sliderHook = (sliderList: characterSlideProps[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función que devuelve los personajes visibles en el slider (previo, actual y siguiente)
    const getVisibleCharacter = () => {
        const prev =
            currentIndex === 0 ? sliderList.length - 1 : currentIndex - 1;
        const current = currentIndex;
        const next =
            currentIndex === sliderList.length - 1 ? 0 : currentIndex + 1;

        return [
            { ...sliderList[prev], position: "left" },
            { ...sliderList[current], position: "center" },
            { ...sliderList[next], position: "right" },
        ];
    };

    // Manejo personaje anterior
    const handlePrev = () => {
        setCurrentIndex(
            currentIndex === 0 ? sliderList.length - 1 : currentIndex - 1,
        );
    };

    // Manejo personaje siguiente
    const handleNext = () => {
        setCurrentIndex(
            currentIndex === sliderList.length - 1 ? 0 : currentIndex + 1,
        );
    };

    // Selección directa de personaje
    const selectCharacter = (index: number) => {
        setCurrentIndex(index);
    };

    return {
        currentIndex,
        handlePrev,
        handleNext,
        selectCharacter,
        getVisibleCharacter,
    };
};

export default sliderHook;
