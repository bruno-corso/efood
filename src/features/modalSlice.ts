import { createSlice } from '@reduxjs/toolkit'

type ModalSlice = {
  status: boolean
}

const initialState: ModalSlice = {
  status: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toogleModal(state) {
      state.status = !state.status
      // window.scrollTo(0,0)
    },
  },
})

export const { toogleModal } = modalSlice.actions
export default modalSlice.reducer
