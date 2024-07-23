import styled from 'styled-components'
import CardRestaurante from '../CardRestaurante'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { fetchItensRestaurantes } from '../../features/getItensSlice'
import { useEffect } from 'react'

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

  const dispatch = useDispatch<AppDispatch>();
  const listaRestaurantes = useSelector((state: RootState) => state.buscaItensApi.itens)
  const statusBuscaRestaurantes = useSelector((state: RootState) => state.buscaItensApi.status)
  const errorBuscaRestaurantes = useSelector((state: RootState) => state.buscaItensApi.error)

  useEffect(() => {
    if (statusBuscaRestaurantes === 'idle') {
      dispatch(fetchItensRestaurantes())
    }
  }, [statusBuscaRestaurantes, dispatch])

  return (
    <>
      {statusBuscaRestaurantes === 'loading' &&
        <p>Loading...</p>}
      {statusBuscaRestaurantes === 'failed' &&
        <>
          <p>Algo deu errado...</p>
          <p>{errorBuscaRestaurantes}</p>
        </>
      }
      {statusBuscaRestaurantes === 'succeeded' &&
        <ListRestaurantes>
          {listaRestaurantes.map((restaurante) => (
            <CardRestaurante
              avaliacao={restaurante.avaliacao}
              capa={restaurante.capa}
              descricao={restaurante.descricao}
              titulo={restaurante.tipo}
              key={restaurante.id}
            />
          ))}
        </ListRestaurantes>
      }
    </>
  )
}

export default Restaurantes
