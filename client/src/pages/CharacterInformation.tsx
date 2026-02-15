import { useParams } from "react-router";

// Hooks
import charactersHook from "../hooks/characters/charactersHook";

const CharacterInformation = () => {
    const { charactersLocal, charactersApiDisney } = charactersHook();

    // Obtenemos el ID del personaje desde los parámetros de la URL
    const id = Number(useParams().id);

    // Buscamos el personaje en ambas fuentes (local y API de Disney)
    const character = charactersLocal.find((char) => char.id === id) || charactersApiDisney.find((char) => char._id === id);

    return (
        <div>
            {/* Título */}
            <div className="flex flex-col gap-2 mb-5 md:mb-15">
                <h1 className="text-2xl md:text-4xl text-white text-center font-bold">Información del personaje</h1>
                <p className="text-white text-center">Aquí puedes ver toda la información del personaje seleccionado</p>
            </div>

            {/* Contenido del personaje */}
            <div>
                <div className="relative w-full h-[400px] md:h-[600px] rounded-xl md:rounded-[10%] overflow-hidden shadow-lg">
                    <img
                        className="object-cover object-center w-full h-full"
                        src={character?.imageUrl}
                        alt={character?.name}
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                        <h2 className="text-sm md:text-2xl text-center font-bold text-white drop-shadow-lg">
                            {character?.name}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterInformation