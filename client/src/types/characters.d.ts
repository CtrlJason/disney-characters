// Interface base para los personajes de Disney
export interface charactersProps {
    name: string;
    date: string;
    description: string;
    imageUrl: string;
    films: string[];
}

// Interfaz para los personajes que se mostrarán en el slider, omitiendo la descripción
export interface characterSlideProps extends Omit<
    charactersProps,
    "description"
> {}

// Interfaz para el formulario de creación de personajes
export interface characterFormProps extends charactersProps {}
