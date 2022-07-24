import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IStarship {
    id: string;
    name: string;
};

const initialState: IStarship[] = [];

const starshipSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        setStarshipFav(state, action: PayloadAction<IStarship>) {
            const isFavAlready = state.find(
                (set) => set.id === action.payload.id &&
                    set.name === action.payload.name
            );
            if (isFavAlready) return state;
            return [...state, { id: action.payload.id, name: action.payload.name }];
        },
        removeStarshipFav(state, action) {
            return state.filter(
                (set) => set.id !== action.payload.id || set.name !== action.payload.name
            )
        }
    }
});

export const { setStarshipFav, removeStarshipFav } = starshipSlice.actions;
export default starshipSlice.reducer;