import React, { useState } from 'react';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCharacterFav, removeCharacterFav } from '../redux/slices/Character.slice'; 
import { setFilmFav, removeFilmFav } from '../redux/slices/Film.slice';
import { setPlanetFav, removePlanetFav } from '../redux/slices/Planet.slice';
import { removeVehicleFav, setVehicleFav, } from '../redux/slices/Vehicle.slice';
import { setStarshipFav, removeStarshipFav } from '../redux/slices/Starship.slice';

interface ICardProps {
    ImageUrl: string;
    name: string
    id: string;
    type: 'characters' | 'films'| 'starships' | 'vehicles' | 'planets';
    isFavorited: boolean;
}

const CharacterCard = ({ ImageUrl,name, id, type, isFavorited }: ICardProps) => {
    
    const [isFavorite, setIsFavorite] = useState<boolean>(isFavorited);
    const dispatch = useDispatch();

    function handleFavourite() {
        if (isFavorited === false) {
            if (type === 'characters') {
                dispatch(setCharacterFav({ name, id }));
            }
            if (type === 'films') {
                dispatch(setFilmFav({ title: name, id }));
            }
            if (type === 'planets') {
                dispatch(setPlanetFav({name, id}))
            }
            if (type === 'starships') {
                dispatch(setStarshipFav({ name, id}))
            }
            if (type === 'vehicles') {
                dispatch(setVehicleFav({ name, id}))
            }
        }
        else {
            if (type === 'characters') {
                dispatch(removeCharacterFav({ name, id }));
            }
            if (type === 'films') {
                dispatch(removeFilmFav({ title: name, id}))
            }
            if (type === 'planets') {       
                dispatch(removePlanetFav({name, id}))
            }
            if (type === 'starships') {
                dispatch(removeStarshipFav)
            }
            if (type === 'vehicles') {
                dispatch(removeVehicleFav)
            }
        }
        setIsFavorite(!isFavorite)
    }
    
    return (
        <div className='container'>
            <button type='button' onClick={() => handleFavourite()}>
                {!isFavorite ? <MdStarBorder size={32} /> : <MdStar size={32}/>}
            </button>
            <img src={ImageUrl} alt="" />
            <Link to={`/${type}/${id}`}>
                <span>{name}</span>
            </Link>
        </div>
    )
}

export default CharacterCard;