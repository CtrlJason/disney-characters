import CharacterForm from "../forms/CharacterForm"

const CreateCharacter = () => {
    return (
        <div className="py-5 px-2 md:pt-10 md:pb-30 md:px-0">
            {/* Título */}
            <div className="flex flex-col gap-2 mb-5 md:mb-15">
                <h2 className="text-2xl md:text-4xl text-gray-800 text-center font-bold">Crea un personaje</h2>
                <p className="text-gray-700 text-center">Completa el formulario de registro</p>
            </div>

            {/* Formulario */}
            <CharacterForm />
        </div>
    )
}

export default CreateCharacter