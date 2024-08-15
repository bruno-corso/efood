import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from './features/counterSlice'
import getItensReducer from './features/getItensSlice'
import toogleModal from './features/modalSlice'
import pratoReducer from './features/pratoSlice'
import carrinhoReducer from './features/carrinhoSlice'

const store = configureStore({
  reducer: {
    contadorDeValor: contadorReducer,
    buscaItensApi: getItensReducer,
    toogleModal: toogleModal,
    pratoReducer: pratoReducer,
    carrinhoReducer: carrinhoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
