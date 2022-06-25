import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { swapi } from "../../api/api";
import { RootState } from "../../redux/store";
import { Character } from "../../types/Characte.type";

export default function Home() {
    const [data, setData] = useState();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [pages, setPages] = useState<number>(1)

    const favCharacters = useSelector(
        (state: RootState) => state.character,
    );

    const getData = useCallback(async () => {
        try {
            const response = await swapi.get(`/people/?pages=${pages}`);
            const fetchedData = await response.data;
            setData(fetchedData);
            setCharacters(fetchedData.results);
        } catch (error) {
            console.error(error)
        }
    }, [])
    return <div>hello</div>;
}
