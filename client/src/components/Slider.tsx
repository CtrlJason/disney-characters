import charactersHook from "../hooks/characters/charactersHook";
import ButtonArrow from "./ui/ButtonArrow";
import sliderHook from "../hooks/sliders/sliderHook"

const Silder = () => {

    // Obtenemos los personajes desde el hook de personajes
    const { charactersApiDisney, numberSelectCharacter } = charactersHook();

    // Obtenemos las funciones y el estado necesario para el slider
    const { currentIndex, handlePrev, handleNext, selectCharacter, getVisibleCharacter } = sliderHook(charactersApiDisney);

    return (
        <div className="relative w-full h-fit p-2 md:p-10 bg-yellow-200">
            {/* Botón Izquierdo */}
            <ButtonArrow handleDirection={handlePrev} direccion="left" />

            <div className="relative flex items-center justify-center gap-2 md:gap-20">

                {/* Carrousel de imagenes */}
                {getVisibleCharacter().map((character) => (
                    <div className={`relative ${character.position === "left" ? "h-[300px] w-[150px] md:h-[450px] md:w-[350px]" : character.position === "center" ? "h-[350px] w-[400px] md:h-[650px] md:w-[510px]" : "h-[300px] w-[150px] md:h-[450px] md:w-[350px]"} border-2 border-white`} key={character.position}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-fit p-2 bg-white">
                            <h2 className="md:text-2xl sm:text-sm text-center font-bold">{character.name}</h2>
                        </div>
                        <img className="object-cover object-center w-full h-full" src={character.imageUrl} alt={character.name} />
                    </div>
                ))}

            </div>

            {/* Botón derecho */}
            <ButtonArrow handleDirection={handleNext} direccion="right" />

            {/* Botones de selección */}
            <div className="flex justify-center gap-4 mt-8">
                {charactersApiDisney && Array(numberSelectCharacter()).fill(0).map((_, index) => (
                    <div key={index}>
                        <button onClick={() => selectCharacter(index)} className="transition-transform hover:scale-115 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={currentIndex === index ? "#ffffff" : "none"} stroke={currentIndex === index ? "#ffffff" : "#000000"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Silder