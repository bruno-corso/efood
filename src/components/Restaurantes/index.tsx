import styled from 'styled-components'
import CardRestaurante from '../CardRestaurante'

const ListRestaurantes = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    gap: 60px;
    grid-template-columns: 480px 480px;
    margin: 60px auto;
`

function Restaurantes() {
  return (
    <ListRestaurantes>
        <CardRestaurante/>
        <CardRestaurante/>
        <CardRestaurante/>
        <CardRestaurante/>
        <CardRestaurante/>
        <CardRestaurante/>
    </ListRestaurantes>
  )
}

export default Restaurantes