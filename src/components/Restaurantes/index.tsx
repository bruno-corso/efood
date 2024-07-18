import styled from 'styled-components'
import Card from '../Card'

const ListRestaurantes = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    gap: 60px;
    grid-template-columns: 480px 480px;
    margin-bottom: 60px
`

function Restaurantes() {
  return (
    <ListRestaurantes>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </ListRestaurantes>
  )
}

export default Restaurantes