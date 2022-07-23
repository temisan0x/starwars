import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICharacterFav{
    id: string
    name: string
};

const initialState: ICharacterFav[] = [];

const characterSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacterFav(state, action: PayloadAction<ICharacterFav>) {
            const isFavAlready = state.find(
                (set) => set.id === action.payload.id  && set.name === action.payload.name
            ) 
            if (isFavAlready) return state;
            return [...state, {id: action.payload.id, name: action.payload.name}]
        },
        removeCharacterFav(state, action) {
            return state.filter(
                (set) => set.id !== action.payload.id || set.name !== action.payload.name
            )
        }
    }
})


export const { setCharacterFav, removeCharacterFav } = characterSlice.actions
export default characterSlice.reducer 
/**
 * our most important concept of this phase is to create an avenue to check if a value is directly equal to the favourited state.
 * firstly, we will first create an interface, which will connect to the stars wars api,
 * our values will include the name and id; ... next, is to create a characterSlice using the createSlice function from reduxjs tool-kit,
 * this will enable us to create bunch of reducers , initialState & name 
 */