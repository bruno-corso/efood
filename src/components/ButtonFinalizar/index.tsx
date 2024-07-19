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

function ButtonFinalizar() {
  return (
    <ButtonComponent>
      <a href="#">
        <h3>Adicionar Carrinho</h3>
      </a>
    </ButtonComponent>
  )
}
export default ButtonFinalizar
