import styled from 'styled-components'
import { cores } from '../../styles'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { toogleModal } from '../../features/modalSlice'

const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
  z-index: 2;
  position: fixed;
`

function Modal() {
  const dispach = useDispatch<AppDispatch>()

  return <ModalDiv onClick={() => dispach(toogleModal())}>Modal</ModalDiv>
}

export default Modal
