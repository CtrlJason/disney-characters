import type { DraggableProps } from "../../types/buttons"

// Hooks
const DragButton = ({ barRef, buttonRef, position, handleMouseDown }: DraggableProps) => {

    return (
        <div
            className="flex bg-gray-200 rounded-lg"
            ref={barRef}
        >
            <button
                className="relative w-[calc(100%/6)] h-7 bg-gray-800 shadow-lg rounded-l-lg rounded-r-lg cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-95"
                style={{ left: `${position?.x}px` }}
                ref={buttonRef}
                onMouseDown={handleMouseDown}
            />
        </div>
    )
}



export default DragButton