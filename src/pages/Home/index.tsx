import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { swapi } from "../../api/api";
import CharacterCard from '../../components/CharacterCard';
import { RootState } from "../../redux/rootReducer";
import { Character } from "../../types/Characte.type";
import { CharacterDataTypes } from '../../types/CharacterDataTypes';

export default function Home() {
    const [data, setData] = useState<CharacterDataTypes>();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [isFavSelected, setIsFavSelected] = useState<boolean>(false)

    const favCharacters = useSelector(
        (state: RootState) => state.characters,
    );

    const getData = useCallback(async () => {
        try {
            const response = await swapi.get(`/people/?pages=${pages}`);
            const fetchedData = await response.data;
            setData(fetchedData);
            setCharacters(fetchedData.results);

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [pages]);

    useEffect(() => {
        setLoading(true);
        getData()
    }, [getData]);

    return (
        <div>
            {loading ? <div>loading</div> :
                <div>
                    {characters.map((character) => (
                        <CharacterCard
                        ImageUrl={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                            character.url,
                        )}.jpg`}
                        name={character.name}
                        id={character.url}
                        type="characters"
                            isFavorited={favCharacters.some(
                            (favorite)=>favorite.name === character.name
                        )} />
                    ))}
                </div>}
        </div>
    )
}
