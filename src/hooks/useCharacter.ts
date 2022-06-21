import { useCallback, useEffect, useState } from 'react';

type Film = {
    title: string;
    url: string;
};

type Planet = {
    title: string;
    url: string;
};

type Vehicle = {
    title: string;
    url: string;
};

type Starship = {
    title: string;
    url: string;
};

type Species = {
    title: string;
    url: string;
};

type HomeWorld = {
    title: string;
    url: string;
}

//attributes
interface Character {
    name: string;
    height: string;
    gender: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    homeworld: string;
    starships: string[];
    films: string[];
    species: string[],
    vehicles: string[],
    url: string;
};

export function useCharacter(data: Character | undefined) {
    const [films, setFilms] = useState(<Film[]>[]);
    const [Planet, setPlanet] = useState(<Planet[]>[]);
    const [vehicles, setVehicles] = useState(<Vehicle[]>[]);
    const [starship, setStarship] = useState(<Starship[]>[]);
    const [species, setSpecies] = useState(<Species[]>[]);
    const [homeworld, setHomeworld] = useState(<HomeWorld[]>[])
}