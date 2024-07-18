import styled from 'styled-components'
import { cores } from '../../styles'

const TagComponent = styled.div`
  display: inline-block;
  color: ${cores.creme};
  background-color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 6px;
`


function Tag() {
  return (
    <TagComponent>
       <h3>Tag Teste</h3>
    </TagComponent>
  )
}
export default Tag
