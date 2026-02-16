export interface ButtonArrowProps {
    handleDirection: () => void;
    direccion: "left" | "right";
}

export interface DraggableProps {
    barRef: React.RefObject<HTMLDivElement | null>;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    listIndex: number;
    selectIndex: (index: number) => void;
}
