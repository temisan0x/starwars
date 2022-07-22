import { combineReducers } from "@reduxjs/toolkit";
import characters from './slices/Character.slice';
import films from './slices/Film.slice';
import starships from './slices/Starship.slice';
import vehicles from './slices/Vehicle.slice';
import planets from './slices/Planet.slice';

const rootReducer = combineReducers({
    characters,
    films,
    starships,
    vehicles,
    planets
})

export type RootState = ReturnType <typeof rootReducer>;
export default rootReducer;