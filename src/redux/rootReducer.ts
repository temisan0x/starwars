import { combineReducers } from "@reduxjs/toolkit";
import characters from './slices/Character.slice';
import film from './slices/Film.slice';
import starship from './slices/Starship.slice';
import vehicle from './slices/Vehicle.slice';
import planets from './slices/Planet.slice';

const rootReducer = combineReducers({
    characters,
    film,
    starship,
    vehicle,
    planets
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;