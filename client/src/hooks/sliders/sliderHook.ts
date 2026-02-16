// Hooks
import { useEffect, useState } from "react";

// Types
import type { charactersProps } from "../../types/characters";
import type { DraggableProps } from "../../types/buttons";

const sliderHook = ({
    // Props para el drag
    barRef = { current: null },
    buttonRef = { current: null },
    // Props para el Slider
    disneyList = [],
}: DraggableProps & { disneyList?: charactersProps[] }) => {
    // ============ ESTADOS ============
    // Estados del Slider
    const [currentIndex, setCurrentIndex] = useState(0);
    const list = disneyList.slice(0, 8);

    // Estados del drag
    const [isDragging, setIsDragging] = useState(false);
    const [draggOffset, setDraggOffset] = useState({ x: 0 });
    const [position, setPosition] = useState({ x: 0 });

    // ============ LÓGICA DEL SLIDER ============
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
        setPosition({
            x: getPositionByIndex(index),
        });
    };

    // ============ LÓGICA DEL DRAG ============
    // Lógica para guardar la posición actual del mouse al hacer clic
    const handleMouseDown = (event: React.MouseEvent) => {
        if (!buttonRef.current) {
            return;
        }

        // Guardamos el offset entre la posición del mouse y la posición del botón para mantener el cursor en el mismo lugar durante el arrastre
        setDraggOffset({
            x: event.clientX - buttonRef.current.getBoundingClientRect().left,
        });

        // Iniciamos el arrastre
        setIsDragging(true);
    };

    // Lógica para manejar el movimiento del botón con la posición del mouse
    const handleMove = (event: MouseEvent) => {
        if (!isDragging || !barRef.current || !buttonRef.current) {
            return;
        }

        // Ancho del contenedor para limitar el movimiento del botón
        const barWeight =
            barRef.current.offsetWidth - buttonRef.current!.clientWidth;

        // Posición del mouse relativa al contenedor, ajustada por el offset del inicio de arrastre
        const mouseX =
            event.clientX -
            barRef.current!.getBoundingClientRect().left -
            draggOffset.x;

        // Limitamos el movimiento del botón dentro del contenedor
        const limitedMouseX = Math.max(0, Math.min(mouseX, barWeight));

        // Calculamos el índice del personaje basado en la posición del botón
        const index = Math.round(
            (limitedMouseX / barWeight) * (list.length - 1),
        ); // Número de personajes - 1 para ajustar el índice
        setCurrentIndex(index);

        // Actualizamos la posición del botón
        setPosition({ x: limitedMouseX });
    };

    // Soltar el mouse y detener el arrastre
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Limpiamos el estado de arrastre al soltar el mouse
    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);

        if (isDragging) {
            window.addEventListener("mousemove", handleMove);
        }

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMove);
        };
    }, [isDragging]);

    // Funciones utilitarias
    const getPositionByIndex = (index: number) => {
        if (!barRef.current || !buttonRef.current) {
            return 0;
        }

        const barWeight =
            barRef.current.offsetWidth - buttonRef.current.clientWidth;
        return (index / (list.length - 1)) * barWeight;
    };

    return {
        // ======== Estados y funciones para el slider ========
        currentIndex,
        handlePrev,
        handleNext,
        selectCharacter,
        getVisibleCharacter,

        // ======== Estados y funciones Drag ========
        position,
        isDragging,
        setIsDragging,
        handleMouseDown,
    };
};

export default sliderHook;
