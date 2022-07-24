import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilmFav {
    id: string;
    title: string;
};

const initialState: IFilmFav[] = [];

const filmSlice = createSlice({
    name: "favcharacters",
    initialState,
    reducers: {
        setFilmFav: (state, action: PayloadAction<IFilmFav>) => {
            const isFavAlready = state.find(
                (set) => set.id === action.payload.id &&
                    set.title === action.payload.title
            )
            if (isFavAlready) return state;
            return [...state, { id: action.payload.id, title: action.payload.title }]
        },
        removeFilmFav: (state, action) => {
            return state.filter(
                (set) => set.id !== action.payload.id || set.title !== action.payload.name
            )
        }
    }
});

export default filmSlice.reducer;
export const { setFilmFav, removeFilmFav } = filmSlice.actions
