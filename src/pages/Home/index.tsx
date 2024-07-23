import { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { fetchItensRestaurantes } from '../../features/getItensSlice'

function Home() {
  // const [restaurantesList, setRestaurantesList] = useState([])

  // async function buscaDados(endpoint: string) {
  //   const response = await axios.get(endpoint)
  //   console.log('STATUS')
  //   console.log(response.status)
  //   console.log('DATA')
  //   console.log(response.data)
  //   setRestaurantesList(response.data)
  // }

  // useEffect(() => {
  //   buscaDados('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  // }, [])

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
        <Restaurantes lista_restaurantes={listaRestaurantes} />}
      <Footer />
    </>
  )
}

export default Home
