import { configureStore } from '@reduxjs/toolkit';

import { signUpUser , addToList, changeLoggedIn, stateReducer } from './stateSlice';



const store = configureStore({
    reducer: {
        state: stateReducer,
    }
})

export { store, signUpUser , addToList, changeLoggedIn };