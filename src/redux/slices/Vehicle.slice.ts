import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IVehicle {
    id: number;
    name: string;
}

const initialState: IVehicle[] = [];

const vehicleSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        setVehicleFav: (state, action: PayloadAction<IVehicle>)=> {
            const isFavAlready = state.find(
                (set) => set.id === action.payload.id
                    && set.name === action.payload.name
            );
            if (isFavAlready) return state;
            return [...state, {id: action.payload.id, name: action.payload.name}];
        },
        removeVehicle: (state, action: PayloadAction<IVehicle>) => { 
            return state.filter((set) => set.id !== action.payload.id || set.name !== action.payload.name);
        }
    }
})

export default vehicleSlice.reducer;
export const { setVehicleFav, removeVehicle } = vehicleSlice.actions