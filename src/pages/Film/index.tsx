import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { Card } from '../../components';
import { InputSearch } from '../../components/InputSearch';
import { swapi } from '../../api/api';
import { Loading } from '../../components/Loading';
import { getUrlId } from '../../utils/getUrlId';
import { Film } from '../../types/Film.types';
import { SelectBtn } from '../../components';   
import { RootState } from '../../redux/rootReducer';


export const Films = () => {
    
    return ( 
        <div>
            
        </div>
    )
}
