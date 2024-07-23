import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type CounterSlice = {
    value: number;
}

const initialState: CounterSlice = {
    value: 0
};

const contadorSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementar(state) {
            state.value += 1
        },
        decrementar(state) {
            state.value -=1
        },
        incrementarValor(state, action: PayloadAction<number>){
            state.value += action.payload
        }
    }
})

export const { incrementar, decrementar, incrementarValor} = contadorSlice.actions
export default contadorSlice.reducer