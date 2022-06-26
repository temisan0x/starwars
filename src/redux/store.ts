import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slices/Character.slice';
import filmSlice from './slices/Film.slice';

const store = configureStore({
    reducer: {
        character: characterReducer,
        film: filmSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;