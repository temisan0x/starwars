import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICharacterFav {
    id: string;
    name: string;
};

const initialState: ICharacterFav[] = [];

const characterSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacterFav: (state, action:PayloadAction<ICharacterFav>) => {
            const isFavAlready = state.find(
                (set) => set.id === action.payload.id
                    && set.name === action.payload.name
            );
            if (isFavAlready) return state;
            return [...state, { id: action.payload.id, name: action.payload.name }];
        },
        removeCharacterFav: (state,action ) => {
            return state.filter(
                (state)=> state.name !== action.payload.name || state.id !== action.payload.id,
            )
        }
    }
});

export const { setCharacterFav, removeCharacterFav} = characterSlice.actions;
export default characterSlice.reducer;