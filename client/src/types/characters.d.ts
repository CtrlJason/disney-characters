// Interface base para los personajes de Disney
export interface charactersProps {
    name: string;
    imageUrl: string;
    description: string;
    films: string[];
    date: string;
    _id?: number;
    id?: number;
}

// Interfaz para la creación de personajes
export interface createCharacterProps extends Omit<
    charactersProps,
    "_id" | "id"
> {}
