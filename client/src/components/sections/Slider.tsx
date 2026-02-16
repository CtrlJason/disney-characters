
// Hooks
import { useRef } from "react";
import charactersHook from "../../hooks/characters/charactersHook";
import sliderHook from "../../hooks/sliders/sliderHook"
import DragButton from "../ui/DragButton";

const Slider = () => {
    // ============ LÓGICA DEL DRAG ============
    // Referencias para el drag
    const barRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // ============ LÓGICA DEL SLIDER ============
    // Obtenemos los personajes desde el hook de personajes
    const { charactersApiDisney, numberSelectCharacter } = charactersHook();

    // Obtenemos las funciones y el estado necesario para el slider
    const {
        currentIndex, getVisibleCharacter, selectCharacter, position, handleMouseDown } = sliderHook({ barRef, buttonRef, disneyList: charactersApiDisney });

    return (
        <div className="relative w-full px-2 py-5 md:py-10 md:px-10">

            {/* Carrousel de imagenes */}
            <div className="relative flex items-center justify-center gap-2 md:gap-20">
                {getVisibleCharacter().map((character) => (
                    <div
                        className={`relative border-4 border-white rounded-lg shadow-lg overflow-hidden ${character.position === "left"
                            ? "h-[300px] w-[150px] md:h-[450px] md:w-[350px]"
                            : character.position === "center"
                                ? "h-[350px] w-[200px] md:h-[650px] md:w-[510px]"
                                : "h-[300px] w-[150px] md:h-[450px] md:w-[350px]"
                            }`}
                        key={character.position}
                    >
                        <img
                            className="object-cover object-center w-full h-full"
                            src={character.imageUrl}
                            alt={character.name}
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                            <h2 className="text-sm md:text-2xl text-center font-bold text-white drop-shadow-lg">
                                {character.name}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botones de selección */}
            <div className="flex justify-center gap-3 md:gap-4 mt-6 mb-6 md:mt-8 md:mb-10">
                {charactersApiDisney && Array(numberSelectCharacter()).fill(0).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => selectCharacter(index)}
                        className="transition-all hover:scale-125 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            className="md:w-5 md:h-5"
                            viewBox="0 0 24 24"
                            fill={currentIndex === index ? "#FFD700" : "none"}
                            stroke={currentIndex === index ? "#FFD700" : "#333333"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                    </button>
                ))}
            </div>

            {/* Botón de arrastre */}
            <DragButton barRef={barRef} buttonRef={buttonRef} position={position} handleMouseDown={handleMouseDown} />
        </div>
    )
}

export default Slider