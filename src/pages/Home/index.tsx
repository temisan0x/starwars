import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { swapi } from "../../api/api";
import {Card, PaginationBtn} from '../../components/index';
import { RootState } from "../../redux/rootReducer";
import { ICharacterFav } from '../../redux/slices/Character.slice';
import { Character } from "../../types/Character.type";
import { CharacterDataTypes } from '../../types/CharacterDataTypes';
import { getUrlId } from "../../utils/getUrlId";
import { debounce } from "lodash";
import './styles.css'

export default function Home() {
    const [data, setData] = useState<CharacterDataTypes>();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [inputSearch, setInputSearch] = useState<string>('')
    const [pages, setPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [isFavSelected, setIsFavSelected] = useState<boolean>(false);

    //passed characters from Character reducer
    const favCharacters = useSelector(
        (state: RootState) => state.characters
    );

    const getData = useCallback(async () => {
        try {
            const response = await swapi.get(`/people/?pages=${pages}`);
            const fetchedData = await response.data;
            setData(fetchedData);
            setCharacters(fetchedData.results);
        } catch {
        } finally {
            setLoading(false)
        }
    }, [pages]);

    //search characters
    const getFilteredData = useCallback(async () => {
        try {
            const response = await swapi.get(`/people/?search=${inputSearch}`);
            const returnedData = await response.data;
            setData(returnedData);
            setCharacters(returnedData.results);
        } catch {
        } finally {
            setLoading(false)
        }
    }, [inputSearch]);


    useEffect(() => {
        setLoading(true);
        getData()
    }, [getData]);

    useEffect(() => {
        setLoading(true);
        getFilteredData()
    }, [getFilteredData]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputSearch(event.target.value)
    }

    const debounceOnChange = debounce(handleInputChange, 500);

    return (
        <>
            <div className="title">
                <h1>
                    <span>Star Wars</span>
                </h1>
            </div>
            <div>
                {!isFavSelected && (
                    <input type="text"
                        placeholder="type something"
                        onChange={(event) => debounceOnChange(event)} />
                )}
            </div>
            <div>
                <button
                    className="selectedBtn"
                    type="button"
                    style={{borderBottom: isFavSelected === false ? '2px solid yellow' : '2px solid grey', padding: '5px'}}
                    onClick={() => setIsFavSelected(false)}>
                    selected
                </button>
                <button
                    className="selectedBtn"
                    type="button"
                    onClick={() => setIsFavSelected(true)}
                    style={{borderBottom: isFavSelected === true ? '2px solid red' : ' 2px solid black', padding: '5px' }}
                > 
                    none selected
                </button>
            </div>
            
            {pages < 3 ? (
                <>
                    <PaginationBtn isActive={pages === 1} onClick={() => setPages(1)} number={1} />
                    <PaginationBtn isActive={pages === 2} onClick={() => setPages(2)} number={2} />
                    <PaginationBtn isActive={pages === 3} onClick={() => setPages(3)} number={3} />
                </>
            ) : <>
                    <PaginationBtn onClick={() => setPages(pages - 1)} number={pages - 1} />

                </>
            }

            <div>
                {loading ? (<div>loading</div>) : !isFavSelected ?
                    (<div>
                        {characters.map((character) => (
                            <div>
                                <Card
                                    key={character.name}
                                    ImageUrl={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                                        character.url,
                                    )}.jpg`}
                                    name={character.name}
                                    id={character.url}
                                    type="characters"
                                    isFavorited={favCharacters.some(
                                        (favorite) => favorite.name === character.name
                                    )} />
                            </div>
                        ))}
                    </div>) : (
                        <div>
                            {favCharacters.length > 0 && favCharacters.map((character: ICharacterFav) => (
                                <div>
                                    <Card
                                        key={character.name}           
                                        ImageUrl={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                                        character.id,
                                    )}.jpg`}
                                        name={character.name}
                                        id={character.id}
                                        type="characters"
                                        isFavorited
                                    />
                                </div>
                            ))}

                            {favCharacters.length === 0 && (
                                <div>
                                    <span>no fav</span>
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        </>
    )
}
