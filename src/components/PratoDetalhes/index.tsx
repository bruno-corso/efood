import styled from 'styled-components'
import { ContainerMd, cores } from '../../styles'

const ElementoPrato = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${cores.rosa};
  color: ${cores.creme};
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  z-index: 3;
  opacity: 1;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ImgPrato = styled.img`
  width: 280px;
`
const ConteudoPrato = styled.div`
  width: 100%;
`

function PratoDetalhes() {
  return (
    <div className={ContainerMd}>
      <ElementoPrato>
        <ImgPrato src={'https://placehold.co/280x280'} />
        <ConteudoPrato>
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ullam omnis, dignissimos accusantium aspernatur, culpa animi,
            maiores consequuntur pariatur dicta adipisci aperiam numquam
            blanditiis laboriosam nam temporibus iusto quibusdam cupiditate?
          </p>
        </ConteudoPrato>
      </ElementoPrato>
    </div>
  )
}

export default PratoDetalhes
