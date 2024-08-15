import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Prato from '../models/Prato'

type Carrinho = {
  itens: Prato[]
  visual: boolean
}

const initialState: Carrinho = {
  itens: [],
  visual: false,
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho(state, action: PayloadAction<Prato>) {
      state.itens.push(action.payload)
      console.log('Carrinho: ', JSON.parse(JSON.stringify(state)))
    },
    removerCarrinho(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
      console.log('Carrinho: ', JSON.parse(JSON.stringify(state.itens)))
    },
    toogleCarrinho(state) {
      state.visual = !state.visual
    },
  },
})

export const { adicionarCarrinho, removerCarrinho, toogleCarrinho } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
