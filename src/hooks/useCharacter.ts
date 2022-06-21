import { useCallback, useEffect, useState } from "react";

type Film = {
    title: string;
    url: string;
};

type Planet = {
    name: string;
    url: string;
};

type Vehicle = {
    name: string;
    url: string;
};

type Starship = {
    name: string;
    url: string;
};

type Species = {
    name: string;
    url: string;
};

type HomeWorld = {
    name: string;
    url: string;
};

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
    species: string[];
    vehicles: string[];
    planets: string[];
    url: string;
}

export function useCharacter(data: Character | undefined) {

    const [films, setFilms] = useState(<Film[]>[]);
    const [Planet, setPlanet] = useState(<Planet[]>[]);
    const [vehicles, setVehicles] = useState(<Vehicle[]>[]);
    const [starship, setStarship] = useState(<Starship[]>[]);
    const [species, setSpecies] = useState(<Species[]>[]);
    const [homeworld, setHomeworld] = useState<HomeWorld>({
        name: "",
        url: "",
    });

    const [loading, setLoading] = useState(true);
    
    //prevent run after every rendering ~ memoized
    const getFilms = useCallback(async () => {
        try {
            data?.films.forEach(async (film) => {
                const response = await fetch(film);
                const filmData = await response.json();

                setFilms((prevState) => {
                    if (prevState.includes(filmData.title)) return prevState;
                    return [...prevState, {
                            title: filmData.title,
                            url: filmData.url,
                        },
                    ];
                });
            });
        } catch {
        } finally {
            setLoading(false);
        }
    }, [data?.films]);

    const getPlanets = useCallback(async () => {
        try {
            data?.planets.forEach(async (planet) => {
                const response = await fetch(planet);
                const planetData = await response.json();

                setPlanet((prevState) => {
                    if (prevState.includes(planetData.name)) return prevState;
                    return [...prevState, {
                        name: planetData.name,
                        url: planetData.url
                    }]
                })
            })
        } catch {
        } finally {
            setLoading(false);
        }
    }, [data?.planets]);

    const getVehicles = useCallback(async () => {
        try {
            data?.vehicles.forEach(async (vehicles) => {
                const response = await fetch(vehicles);
                const vehicleData = await response.json();

                setVehicles((prevState) => {
                    if (prevState.includes(vehicleData.name)) return prevState;
                    return [...prevState, {
                        name: vehicleData.name,
                        url: vehicleData.url
                    }]
                })
            })
        } catch {
        } finally {
            setLoading(false);
        }
    },[])
}

