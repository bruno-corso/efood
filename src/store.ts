import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./features/counterSlice";

const store = configureStore({
    reducer: {
        contadorDeValor: contadorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;