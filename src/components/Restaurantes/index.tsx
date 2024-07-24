import styled from 'styled-components'
import CardRestaurante from '../CardRestaurante'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

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
  const listaRestaurantes = useSelector(
    (state: RootState) => state.buscaItensApi.itens
  )
  const statusBuscaRestaurantes = useSelector(
    (state: RootState) => state.buscaItensApi.status
  )
  const errorBuscaRestaurantes = useSelector(
    (state: RootState) => state.buscaItensApi.error
  )

  return (
    <>
      {statusBuscaRestaurantes === 'loading' && <p>Loading...</p>}
      {statusBuscaRestaurantes === 'failed' && (
        <>
          <p>Algo deu errado...</p>
          <p>{errorBuscaRestaurantes}</p>
        </>
      )}
      {statusBuscaRestaurantes === 'succeeded' && (
        <ListRestaurantes>
          {listaRestaurantes.map((restaurante) => (
            <CardRestaurante
              key={restaurante.id}
              avaliacao={restaurante.avaliacao}
              capa={restaurante.capa}
              descricao={restaurante.descricao}
              titulo={restaurante.tipo}
              id={restaurante.id}
            />
          ))}
        </ListRestaurantes>
      )}
    </>
  )
}

export default Restaurantes
