import styled from 'styled-components'
import CardRestaurante from '../CardRestaurante'
import Restaurante from '../../Models/Restaurante'

const ListRestaurantes = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 60px;
  grid-template-columns: 480px 480px;
  margin: 60px auto;
`
type Props = {
  lista_restaurantes: Restaurante[]
}

function Restaurantes({ lista_restaurantes }: Props) {
  return (
    <ListRestaurantes>
      {lista_restaurantes.map((restaurante) => (
        <CardRestaurante
          avaliacao={restaurante.avaliacao}
          capa={restaurante.capa}
          descricao={restaurante.descricao}
          titulo={restaurante.tipo}
          key={restaurante.id}
        />
      ))}
    </ListRestaurantes>
  )
}

export default Restaurantes
