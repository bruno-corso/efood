import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Restaurante from "../models/Restaurante"
import axios from "axios";
import { AppDispatch } from "../store";

type ItemState = {
    itens: Restaurante[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined
}

const initialState: ItemState = {
    itens: [],
    status: 'idle',
    error: null
}

export const fetchItensRestaurantes: AsyncThunk<Restaurante[], void, { dispatch: AppDispatch}> = createAsyncThunk<Restaurante[]>('itens/fetcheItens', async () => {
    const response = await axios.get<Restaurante[]>('https://fake-api-tau.vercel.app/api/efood/restaurantes');
    return response.data
})

const itensSlice = createSlice({
    name: 'itens',
    initialState,
    reducers: {
        escolherRestaurante(state, action: PayloadAction<number>){
            state.itens = state.itens.filter((restaurante) => (restaurante.id) === action.payload)
            console.log("Restaturante Selecionado: ",JSON.parse(JSON.stringify(state.itens[0])));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItensRestaurantes.pending, (state) =>{
                state.status = 'loading'
            })
            .addCase(fetchItensRestaurantes.fulfilled, (state, action: PayloadAction<Restaurante[]>) => {
                state.status = "succeeded";
                state.itens = action.payload;
            })
            .addCase(fetchItensRestaurantes.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    },
})


export const { escolherRestaurante } = itensSlice.actions
export default itensSlice.reducer