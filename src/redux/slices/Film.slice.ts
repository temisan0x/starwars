import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilmFav {
    id: string;
    title: string;
}

const initialState: IFilmFav[] = []

const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        setFilmFav: (state,action: PayloadAction<IFilmFav>) => {
            const isFavAlready = state.find(
                (set) => set.id === action.payload.id && set.title === action.payload.title,
            );
            if (isFavAlready) return state;
            return [...state, { id:action.payload.id, title:action.payload.title }]
        },
        removeFilmFav: (state, action: PayloadAction<IFilmFav>) => {
            return state.filter((set) => set.title !== action.payload.title || set.id !== action.payload.title);
        }
    }
});

export const { setFilmFav, removeFilmFav } = filmSlice.actions;
export default filmSlice.reducer;