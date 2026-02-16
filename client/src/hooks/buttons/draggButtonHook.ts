import { useEffect, useState } from "react";

import type { DraggableProps } from "../../types/buttons";

const draggButtonHook = ({
    barRef,
    buttonRef,
    listIndex,
    selectIndex,
}: DraggableProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [draggOffset, setDraggOffset] = useState({ x: 0 });
    const [position, setPosition] = useState({ x: 0 });

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
        const index = Math.round((limitedMouseX / barWeight) * (listIndex - 1)); // Número de personajes - 1 para ajustar el índice
        selectIndex(index);

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

    return {
        isDragging,
        position,
        setIsDragging,
        handleMouseDown,
        handleMove,
    };
};

export default draggButtonHook;
