import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import {swapi} from '../../api/api'
import { Character } from "../../types/Characte.type";

const CharactersPage = () => {
    const [data, setData] = useState<Character>();
    const { films, homeworld, loading:isloadingCharacter, planets, species, starships, vehicles } =
        useCharacter(data); //passed our states & redeclared a loading state
    const [loading, setLoading] = useState<boolean>(true)
    const { id } = useParams();

    // const getCharactersData = useCallback(async () => {
    //     try {
    //         ///people/:id/ -- get a specific people resource
    //         const response = await swapi.get(`/people/${id}`);
    //         setData(response.data);
    //     } catch { }
    //     finally {
    //         setLoading(false)
    //     }
    // }, [id]);

    // useEffect(() => {
    //     getCharactersData()
    // }, [getCharactersData]);

    // if(loading) return <div>Loading</div>
    return (
        <div>
        {data?.name}
        </div>
    )
};

export default CharactersPage;
