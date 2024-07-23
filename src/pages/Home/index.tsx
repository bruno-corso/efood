import { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { fetchItensRestaurantes } from '../../features/getItensSlice'

function Home() {

  const dispatch = useDispatch<AppDispatch>();
  const statusBuscaRestaurantes = useSelector((state: RootState) => state.buscaItensApi.status)
  const errorBuscaRestaurantes = useSelector((state: RootState) => state.buscaItensApi.error)

  useEffect(() => {
      dispatch(fetchItensRestaurantes())
  }, [])

  return (
    <>
      <Header tipo_header={'grande'} />
      {statusBuscaRestaurantes === 'loading' &&
        <p>Loading...</p>}
      {statusBuscaRestaurantes === 'failed' &&
      <>
        <p>Algo deu errado...</p>
        <p>{errorBuscaRestaurantes}</p>
      </>
        }
      {statusBuscaRestaurantes === 'succeeded' &&
        <Restaurantes />}
      <Footer />
    </>
  )
}

export default Home
