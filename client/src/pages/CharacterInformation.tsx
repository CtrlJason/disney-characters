
// Router
import { useParams, Link } from "react-router";

// UI
import ButtonArrow from "../components/ui/ButtonArrow";

// Hooks
import charactersHook from "../hooks/characters/charactersHook";

const CharacterInformation = () => {
    const { charactersLocal, charactersApiDisney } = charactersHook();

    // Obtenemos el ID del personaje desde los parámetros de la URL
    const id = Number(useParams().id);

    // Buscamos el personaje en ambas fuentes (local y API de Disney)
    const character = charactersLocal.find((char) => char.id === id) || charactersApiDisney.find((char) => char._id === id);

    return (
        <div className="py-10 md:py-10">
            <div className="relative">
                <Link to={"/"}>
                    <ButtonArrow direccion="left" />
                </Link>
            </div>

            {/* Contenido del personaje */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 md:mb-10 mx-auto w-[250px] md:h-[350px] md:w-[1100px]">
                <div className="rounded-lg overflow-hidden h-[250px] md:h-full w-[250px] md:w-[350px] border-4 border-white shadow-md">
                    <img
                        className="object-cover object-center w-full h-full"
                        src={character?.imageUrl}
                        alt={character?.name}
                    />
                </div>
                <div className="px-5 md:p-5 mx-auto md:mx-0 md:my-auto h-[150px] md:h-[250px] w-[250px] md:w-[400px] flex overflow-y-scroll">
                    <p className="text-lg md:text-2xl text-gray-800">
                        <span className="font-semibold">Acerca de {character?.name}:</span> {character?.description ? character.description : "Personaje sin descripción."}
                    </p>
                </div>
            </div>

            <div className="w-full flex md:justify-end">
                <div className="pl-4 pr-25 md:pl-[12%] md:pr-0 py-10 flex flex-col gap-8 w-[95%] md:w-[70%] h-[250px] md:h-[350px] rounded-r-full md:rounded-l-full md:rounded-r-none bg-gray-300 shadow-md">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {character?.name}
                    </h2>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-700">Películas</h3>
                        <p className="text-md md:text-lg text-gray-800">
                            {character?.films.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterInformation