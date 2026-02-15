// Interface base para los personajes de Disney
export interface charactersProps {
    name: string;
    date: string;
    description?: string;
    imageUrl: string;
    films: string[];
}

// Interfaz para el formulario de creación de personajes
export interface characterFormProps extends charactersProps {}
