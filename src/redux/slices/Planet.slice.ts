import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPlanets {
    id: string;
    name: string;
}

const initialState: IPlanets[] = [];

const planets = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        setPlanetFav: (state, action: PayloadAction<IPlanets>) => {
            const isFavAlready = state.find((set) => set.id === action.payload.id && set.name === action.payload.name)
            if (isFavAlready) return state;
            return [...state, { id: action.payload.id, name: action.payload.name }]
        },
        removePlanetFav: (state, action: PayloadAction<IPlanets>) => { return state.filter((set) => set.id !== action.payload.id || set.name !== action.payload.name) }
    }
});

export default planets.reducer;
export const {setPlanetFav, removePlanetFav} = planets.actions