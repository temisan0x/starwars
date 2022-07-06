import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { Card } from '../../components';
import { InputSearch } from '../../components/InputSearch';
import { swapi } from '../../api/api';
import { Loading } from '../../components/Loading';
import { getUrlId } from '../../utils/getUrlId';
import { SelectBtn } from '../../components';
import { RootState } from '../../redux/rootReducer';
import { Film } from '../../types/Film.types';



export const Films = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isFavSelected, setFavSelected] = useState(true);
    const [inputSearch, setInputSearch] = useState<string>('');


    const filmFav = useSelector((state: RootState) => state.films);

    const getData = useCallback(async () => {
        try {
            const res = await swapi.get('films/');
            const fetchedData = res.data;
            setFilms(fetchedData.results);
        }
        catch {
        } finally {
            setLoading(false);
        }
    }, []);

    const getFilteredData = useCallback(async () => {
        try { 
            const res = await swapi.get(`films/?search=${inputSearch}`);
            const fetchedData = await res.data;
            setFilms(fetchedData.results);
        } catch {
        } finally {
            setLoading(false);
        }
    }, [inputSearch]);

    useEffect(() => {
        setLoading(true);
        getData();
    }, [getData]);

    useEffect(() => { 
        setLoading(true)
        getFilteredData();
    })

    return (
        <div>
            films
        </div>
    )
}
