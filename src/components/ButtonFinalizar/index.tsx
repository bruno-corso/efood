import styled from 'styled-components'
import { cores } from '../../styles'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { toogleModal } from '../../features/modalSlice'

const ButtonComponent = styled.div`
  display: block;
  background-color: ${cores.creme};
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 6px;

  a {
    text-decoration: none;
    color: ${cores.rosa};
  }

  &:hover {
    opacity: 0.8;
  }
`

type Props = {
  texto: string
}

function ButtonFinalizar({ texto }: Props) {
  const dispach = useDispatch<AppDispatch>()

  return (
    <ButtonComponent onClick={() => dispach(toogleModal()) }>
      <a>
        <h3>{texto}</h3>
      </a>
    </ButtonComponent>
  )
}
export default ButtonFinalizar
