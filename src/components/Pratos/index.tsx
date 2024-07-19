import styled from 'styled-components'
import CardPrato from '../CardPrato'

const ListRestaurantes = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    gap: 40px;
    grid-template-columns: 320px 320px 320px ;
    margin: 60px auto;
`

function Pratos() {
  return (
    <ListRestaurantes>
        <CardPrato/>
        <CardPrato/>
        <CardPrato/>
        <CardPrato/>
        <CardPrato/>
        <CardPrato/>
    </ListRestaurantes>
  )
}

export default Pratos