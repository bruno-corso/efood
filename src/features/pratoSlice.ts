import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Prato from '../models/Prato'

const initialState: Prato = {
  id: 0,
  foto: '',
  preco: 0,
  nome: '',
  descricao: '',
  porcao: '',
}

const pratoSlice = createSlice({
  name: 'prato',
  initialState,
  reducers: {
    escolherPrato(state, action: PayloadAction<Prato>) {
      state.id = action.payload.id
      state.foto = action.payload.foto
      state.preco = action.payload.preco
      state.nome = action.payload.nome
      state.descricao = action.payload.descricao
      state.porcao = action.payload.porcao
      state.restaurante = action.payload.restaurante

      console.log('Prato Selecionado: ', JSON.parse(JSON.stringify(state)))
    },
  },
})

export const { escolherPrato } = pratoSlice.actions
export default pratoSlice.reducer
