// Hooks
import { useAlertContext } from "../../context/AlertContext";
import characterFormHook from "../../hooks/forms/characterFormHook"

// UI
import Alert from "../ui/Alert";

const CharacterForm = () => {
    const { status } = useAlertContext();

    const { createdCharacter, setCreatedCharacter, handleSubmit, addFilmToCharacter, filmsList } = characterFormHook();

    return (
        <div className="relative w-full h-fit flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-center">

            {/* Alerta de estado */}
            <Alert message={status.message} />

            {/* Vista previa de la imagen */}
            <div className="md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 h-[200px] w-[240px] md:w-[700px] md:h-[500px] shadow-lg rounded-xl md:rounded-[10%] overflow-hidden border-4 border-white/50">
                <img
                    className={`
                    ${createdCharacter.imageUrl ? '' : 'blur-[1px]'} w-full h-full object-cover`}
                    src={createdCharacter.imageUrl || "https://img.freepik.com/foto-gratis/fondo-3d-ninos-castillo_52683-118091.jpg"}
                    alt={createdCharacter.name}
                />
                {!createdCharacter.imageUrl && (
                    <p className="absolute top-1/2 -translate-y-1/2 left-0 w-full px-3 md:text-2xl text-white text-center font-bold">
                        Agrega el URL de la imagen
                    </p>
                )}
            </div>

            {/* Formulario */}
            <form
                className="bg-white rounded-md md:rounded-none shadow-lg px-10 py-5 w-full md:mr-12"
                onSubmit={handleSubmit}
            >
                <div className="md:ml-40 md:w-1/3 md:grid md:grid-cols-2 md:mr-10 space-y-4 space-x-2">
                    {/* Nombre */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-semibold text-sm md:text-md">
                            Nombre:
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            className="text-sm md:text-md border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={createdCharacter.name}
                            onChange={(e) => setCreatedCharacter({
                                ...createdCharacter,
                                name: e.target.value
                            })}
                        />
                    </div>

                    {/* URL de imagen */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="imageUrl" className="font-semibold text-sm md:text-md">
                            URL de la imagen:
                        </label>
                        <input
                            required
                            type="text"
                            id="imageUrl"
                            className="border-2 border-gray-300 text-sm md:text-md rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={createdCharacter.imageUrl}
                            onChange={(e) => setCreatedCharacter({
                                ...createdCharacter,
                                imageUrl: e.target.value
                            })}
                        />
                    </div>

                    {/* Descripción */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description" className="font-semibold text-sm md:text-md">
                            Descripción del personaje:
                        </label>
                        <textarea
                            required
                            id="description"
                            rows={4}
                            className="border-2 border-gray-300 text-sm md:text-md rounded px-3 py-2 resize-none focus:outline-none focus:border-blue-500"
                            value={createdCharacter.description}
                            onChange={(e) => setCreatedCharacter({
                                ...createdCharacter,
                                description: e.target.value
                            })}
                        />
                    </div>

                    {/* Películas */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="films" className="font-semibold text-sm md:text-md">
                            Películas en las que aparece el personaje:
                        </label>
                        <select
                            id="films"
                            className="w-full border-2 border-gray-300 text-sm md:text-md rounded px-3 py-2 focus:outline-none focus:border-blue-500 whitespace-normal overflow-wrap-anywhere"
                            value={createdCharacter.films}
                            onChange={(e) => addFilmToCharacter(e.target.value)}
                        >
                            <option value="">Selecciona una película</option>
                            {filmsList.map((film) => (
                                <option
                                    key={film}
                                    value={film}
                                    className="whitespace-normal break-words py-1"
                                >
                                    {film}
                                </option>
                            ))}
                        </select>
                        <div>
                            <p className="text-xs text-gray-500 mt-1">Películas seleccionadas:</p>
                            {createdCharacter.films.map((film) => (
                                <span
                                    key={film}
                                    className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mt-2 mr-2"
                                >
                                    {film}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Fecha */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="date" className="font-semibold text-sm md:text-md">
                            Fecha de creación del personaje:
                        </label>
                        <input
                            required
                            type="date"
                            id="date"
                            className="border-2 border-gray-300 text-sm md:text-md rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={createdCharacter.date}
                            onChange={(e) => setCreatedCharacter({
                                ...createdCharacter,
                                date: e.target.value
                            })}
                        />
                    </div>

                    {/* Botón de envío */}
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md font-bold py-3 rounded transition-colors duration-200 cursor-pointer"
                        >
                            Crear personaje
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CharacterForm