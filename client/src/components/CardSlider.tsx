
import charactersHook from "../hooks/characters/charactersHook";
import cardSliderHook from "../hooks/sliders/cardSliderHook"
import ButtonArrow from "./ui/ButtonArrow";

const Cards = () => {
    const { charactersApiDisney, charactersLocal } = charactersHook();

    const { isMobile, getVisibleCharacter, handlePrev, handleNext } = cardSliderHook(charactersApiDisney, charactersLocal);

    return (
        <div className="relative h-fit p-2 md:py-10 bg-orange-300">

            <ButtonArrow handleDirection={handlePrev} direccion="left" />

            <div className={`${isMobile ? "grid grid-cols-1" : "grid grid-cols-2"} w-[350px] md:w-[800px] gap-4 mx-auto`}>
                {getVisibleCharacter().map((character, index) => (
                    <div key={index} className="relative h-[300px] md:h-[400px]">
                        <img className="object-fit w-full h-full rounded-xl" src={character.imageUrl} alt={character.name} />
                        <div className="absolute flex flex-col gap-2 text-xl font-semibold bottom-4 mx-4">
                            <h2 className="rounded-lg bg-white p-2">{character.name}</h2>
                            <p className="text-sm rounded-lg bg-white p-2">{character.films}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ButtonArrow handleDirection={handleNext} direccion="right" />

        </div>
    )
}

export default Cards