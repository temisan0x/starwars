import { combineReducers } from "@reduxjs/toolkit";
import characters from './slices/Character.slice';
import film from './slices/Film.slice';

const rootReducer = combineReducers({
    characters,
    film
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;