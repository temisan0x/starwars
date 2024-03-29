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
import { Container } from './style';
import { IFilmFav } from '../../redux/slices/Film.slice';



export const Films = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isFavSelected, setFavSelected] = useState(false);
    const [inputSearch, setInputSearch] = useState<string>('');


    const filmFav = useSelector((state: RootState) => state.films);

    const getData = useCallback(async () => {
        try {
            const res = await swapi.get(`films/`);
            const fetchedData = res.data;
            setFilms(fetchedData.results);
        }
        catch {
        } finally {
            setLoading(false);
        }
    }, []);

    console.log(getData())

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
    }, [getFilteredData]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputSearch(event.target.value);
    };

    const debounceOnChange = debounce(handleInputChange, 500);

    return (
        <Container>
            <div className="title">
                <h1>Films - {''}
                    <span>Star Wars</span>
                </h1>
            </div>

            <div className="header">
                {!isFavSelected && (
                    <InputSearch
                        type="text"
                        placeholder="search films"
                        onChange={(event) => debounceOnChange(event)}
                    />
                )}

                <div className="select">
                    <SelectBtn
                        type="button"
                        isSelected={isFavSelected === false}
                        onClick={() => setFavSelected(false)}
                    >
                        films
                    </SelectBtn>
                    <SelectBtn
                        type="button"
                        isSelected={isFavSelected === true}
                        onClick={() => setFavSelected(true)}
                    >
                        favourite films
                    </SelectBtn>
                </div>
            </div>

            {loading ?
                (
                    <div className="loading">
                        <Loading />
                        <span>fetching data</span>
                    </div>
                ) :
                !isFavSelected ? (
                    <div className="cards">
                        {films.map((film) => (
                            <Card
                                ImageUrl={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                                    film.url
                                )}.jpg`}
                                type="films"
                                name={film.title}
                                key={film.title}
                                id={getUrlId(film.url)}
                                isFavorited={filmFav.some(
                                    (favorite) => favorite.title === film.title
                                )} gender={''} />
                        ))}
                    </div>
                ) : filmFav.length > 0 ? (
                    <div className="cards">
                        {filmFav.map((film) => (
                            <Card
                                ImageUrl={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
                                name={film.title}
                                key={film.title}
                                id={film.id}
                                type="films"
                                isFavorited
                                gender={''}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-favourite">
                        <span>No fav Film</span>
                    </div>
                )}
        </Container>
    )
}
