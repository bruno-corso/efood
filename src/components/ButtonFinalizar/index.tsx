import styled from 'styled-components'
import { cores } from '../../styles'

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

function ButtonFinalizar({texto}: Props) {
  return (
    <ButtonComponent>
      <a href="#">
        <h3>{texto}</h3>
      </a>
    </ButtonComponent>
  )
}
export default ButtonFinalizar
