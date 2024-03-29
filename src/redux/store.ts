import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
})

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default
        store.replaceReducer(newRootReducer);
    });
}

//extacting Dispatch type from the store
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState,null, Action<string>>
export default store;

//configureStore 
//thunk ~ a callback function dispersed to the redux store