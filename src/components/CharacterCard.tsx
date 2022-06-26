import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCharacterFav, removeCharacterFav } from '../redux/slices/Character.slice'; 
import { setFilmFav, removeFilmFav } from '../redux/slices/Film.slice';
import { setPlanetFav, removePlanetFav } from '../redux/slices/Planet.slice';
import { setVehicleFav, removeVehicleFav } from '../redux/slices/Vehicle.slice';
import { setStarshipFav, removeStarshipFav } from '../redux/slices/Starship.slice';

interface ICardProps {
    ImageUrl: string;
    id: string;
    type: 'characters' | 'film'| 'starships' | 'vehicles' | 'planet';
    isFavorited: boolean;
}

const CharacterCard = ({ ImageUrl, id, type, isFavorited }: ICardProps) => {
    
    const [isFavorite, setIsFavorite] = useState<boolean>(isFavorited);
    const dispatch = useDispatch();

    function handleFavourite() {
        
    }
    
    return (
        <div>CharacterCard</div>
    )
}

export default CharacterCard;