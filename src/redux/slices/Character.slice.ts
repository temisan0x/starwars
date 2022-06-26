import { createSlice } from "@reduxjs/toolkit";

export interface ICharacterFav {
    id: string
    name: string
};


const characterSlice = createSlice({
    name: "character",
    initialState: <ICharacterFav[]>[],
    reducers: {
        setCharacterFav: (state, {payload}) => {
            const { id, name } = payload;//incoming state
            const isFavAlready = state.find(
                (set) => set.id === id && set.name === name,
            );
            if (isFavAlready) return state;
            return [...state, { id, name }];
        },
        removeCharacterFav: (state, { payload }) => {
            const { id, name } = payload;
            return state.filter(
                (state)=> state.name !== name || state.id !== id,
            )
        }
    }
});

export const { setCharacterFav, removeCharacterFav} = characterSlice.actions;
export default characterSlice.reducer;