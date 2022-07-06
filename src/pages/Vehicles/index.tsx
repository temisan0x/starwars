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
import { Vehicle } from '../../types/Vehicle.type';


export const Films = () => {
    const [data, setData] = useState()
    const [films, setFilms] = useState<Vehicle[]>([]);

    return ( 
        <div>
            films
        </div>
    )
}
