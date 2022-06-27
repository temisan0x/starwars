import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCharacterFav, removeCharacterFav } from '../redux/slices/Character.slice'; 
import { setFilmFav, removeFilmFav } from '../redux/slices/Film.slice';
import { setPlanetFav, removePlanetFav } from '../redux/slices/Planet.slice';
import { setVehicleFav, } from '../redux/slices/Vehicle.slice';
import { setStarshipFav, removeStarshipFav } from '../redux/slices/Starship.slice';

interface ICardProps {
    ImageUrl: string;
    name: string
    id: string;
    type: 'characters' | 'films'| 'starships' | 'vehicles' | 'planet';
    isFavorited: boolean;
}

const CharacterCard = ({ ImageUrl,name, id, type, isFavorited }: ICardProps) => {
    
    const [isFavorite, setIsFavorite] = useState<boolean>(isFavorited);
    const dispatch = useDispatch();

    function handleFavourite() {
        if (type === 'characters') {
            dispatch(setCharacterFav({ name, id }));
        }
        if (type === 'films') {
            dispatch(setFilmFav({ title: name, id }));
        }
        if (type === 'planet') {
            dispatch(setPlanetFav({name, id}))
        }
        if (type === 'starships') {
            dispatch(setStarshipFav({ name, id}))
        }
        if (type === 'vehicles') {
            dispatch(setVehicleFav({ name, id}))
        }
    }
    
    return (
        <div>CharacterCard</div>
    )
}

export default CharacterCard;