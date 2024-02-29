import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';
// configureStore automatically adds redux-thunk middleware
// to add extra middleware say logger from redux-logger we can concat as below
import reducers from './reducers';

export const store = configureStore({
    reducer: reducers,
    //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
