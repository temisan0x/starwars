import { useCallback, useEffect, useState } from "react";
import { Character } from "../types/Character.type";

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

type HomeWorld = {
    name: string;
    url: string;
};

export function useCharacter(data: Character | undefined) {

    const [films, setFilms] = useState<Film[]>([]);
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [starships, setStarships] = useState<Starship[]>([]);
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

                setPlanets((prevState) => {
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
    }, [data?.vehicles]);

    const getStarShip = useCallback(async () => {
        try {
            data?.starships.forEach(async (starships) => {
                const response = await fetch(starships);
                const starshipData = await response.json();
                
                setStarships((prevState) => {
                    if (prevState.includes(starshipData.name)) return prevState;
                    return [...prevState, {
                        name: starshipData.name,
                        url: starshipData.url,
                    }]
                })
            })
        } catch {
        } finally {
            setLoading(false);
        }
    }, [data?.starships]);

    const getHomeWorld = useCallback(async () => {
        try {
            if (!data?.homeworld) return;
                const response = await fetch(data.homeworld);
                const homeWorldData = await response.json();
                
            setHomeworld({
                name: homeWorldData.name,
                url: homeWorldData.url
                })
        } catch {
        } finally {
            setLoading(false);
        }
    }, [data?.homeworld]);


    useEffect(() => {
        getFilms()
    }, [getFilms]);

    useEffect(() => {
        getPlanets()
    }, [getPlanets]);
    
    useEffect(() => {
        getVehicles()
    }, [getVehicles]);

    useEffect(() => {
        getStarShip()
    }, [getStarShip]);

    useEffect(() => {
        getHomeWorld()
    }, [getHomeWorld]);

    return {
        loading,
        homeworld,
        planets,
        films,
        starships,
        vehicles
    };
}
