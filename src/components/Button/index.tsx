import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

const ButtonComponent = styled.div`
  display: inline-block;
  background-color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 6px;

  a {
    text-decoration: none;
    color: ${cores.creme};
  }

  &:hover {
    opacity: 0.8;
  }
`

function ButtonTag() {
  return (
    <ButtonComponent>
      <Link to="restaurante">
        <h3>Saiba Mais</h3>
      </Link>
    </ButtonComponent>
  )
}
export default ButtonTag
