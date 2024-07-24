import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from './features/counterSlice'
import getItensReducer from './features/getItensSlice'

const store = configureStore({
  reducer: {
    contadorDeValor: contadorReducer,
    buscaItensApi: getItensReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
