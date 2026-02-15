import { useEffect, useState } from "react";

// Types
import type { charactersProps } from "../../types/characters";

const cardSliderHook = (
    disneyList: charactersProps[],
    charactersLocal: charactersProps[] = [],
) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const [currentIndex, setCurrentIndex] = useState(0);

    const list = [
        ...(disneyList.length ? disneyList.slice(0, 12) : []),
        ...(charactersLocal.length ? charactersLocal : []),
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Se agrega el listener para detectar cambios en el tamaño de la ventana (Prueba de responsividad)
        window.addEventListener("resize", handleResize);

        // Se limpia el listener al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const itemsPerView = isMobile ? 1 : 4;

    // Función que devuelve los personajes visibles en el slider (previo, actual y siguiente)
    const getVisibleCharacter = () => {
        return list.slice(currentIndex, currentIndex + itemsPerView);
    };

    // Manejo personaje anterior
    const handlePrev = () => {
        const newIndex = currentIndex - itemsPerView;
        setCurrentIndex(newIndex < 0 ? list.length - itemsPerView : newIndex);
    };

    // Manejo personaje siguiente
    const handleNext = () => {
        const newIndex = currentIndex + itemsPerView;
        setCurrentIndex(newIndex >= list.length ? 0 : newIndex);
    };

    return {
        isMobile,
        currentIndex,
        handlePrev,
        handleNext,
        getVisibleCharacter,
    };
};

export default cardSliderHook;
