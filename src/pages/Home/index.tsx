import React,{ useCallback, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { swapi } from "../../api/api";
import { RootState } from "../../redux/store";
import { Character } from "../../types/Characte.type";

export default function Home() {
    const [data, setData] = useState();

    const favouriteCharacters = useSelector(
        (state:RootState)=> state.character,
    );

    return (
        <div>
            hello
        </div>
    )
}