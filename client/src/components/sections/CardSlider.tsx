// Router
import { Link } from "react-router";

// Hooks
import charactersHook from "../../hooks/characters/charactersHook";
import cardSliderHook from "../../hooks/sliders/cardSliderHook"

// UI
import ButtonArrow from "../ui/ButtonArrow";

const Cards = () => {
    const { charactersApiDisney, charactersLocal } = charactersHook();

    const { isMobile, getVisibleCharacter, handlePrev, handleNext } = cardSliderHook(charactersApiDisney, charactersLocal);

    return (
        <div className="flex flex-col gap-4 py-5 px-2 md:py-10">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-4xl text-gray-800 text-center font-bold">Personajes Disney</h2>
                <p className="text-gray-700 text-center">Haz clic en los personajes para ver más información</p>
            </div>

            <div className="relative">
                <ButtonArrow parentFunction={handlePrev} direccion="left" />

                <div className={`${isMobile ? "flex justify-center" : "grid grid-cols-2"} w-full max-w-[350px] md:max-w-[800px] ap-4 md:gap-6 mx-auto`}>
                    {getVisibleCharacter().map((character, index) => (
                        <Link
                            to={`/character/${character._id || character.id}`}
                            key={index}
                            className="relative h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                className="object-cover w-full h-full"
                                src={character.imageUrl}
                                alt={character.name}
                            />
                            <div className="absolute bottom-0 p-4">
                                <h2 className="text-lg md:text-xl font-bold text-white drop-shadow-lg mb-2">
                                    {character.name}
                                </h2>
                                <p className="text-xs md:text-sm text-white bg-purple-500/75 rounded-lg p-2">
                                    {character.films.length ? character.films.join(", ") : "Sin información de películas"}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <ButtonArrow parentFunction={handleNext} direccion="right" />
            </div>
        </div>
    )
}

export default Cards