import { createSlice } from "@reduxjs/toolkit";

export interface IFilmFav {
    id: string;
    title: string;
}

const filmSlice = createSlice({
    name: "film",
    initialState: <IFilmFav[]>[],
    reducers: {
        setFilmFav: (state, { payload }) => {
            const { id, title } = payload;

            const isFavAlready = state.find(
                (set) => set.id === id && set.title === title,
            );
            if (isFavAlready) return state;
            return [...state, { id, title }]
        },
        removeFilmFav: (state, { payload }) => {
            const { id, title } = payload;
            return state.filter((film) => film.title !== title || film.id !== id);
        }
    }
});

export const { setFilmFav, removeFilmFav } = filmSlice.actions;
export default filmSlice.reducer;