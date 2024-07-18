import styled from 'styled-components'
import { cores } from '../../styles'

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
      <a href="#">
        <h3>Saiba Mais</h3>
      </a>
    </ButtonComponent>
  )
}
export default ButtonTag
