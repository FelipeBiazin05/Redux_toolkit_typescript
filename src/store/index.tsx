import counterReducer from './reducers/counter'

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        Counter: counterReducer,
    }
})

export type RootReducer = ReturnType<typeof store.getState>;