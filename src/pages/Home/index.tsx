import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'
import axios from 'axios'

function Home() {
  const [restaurantesList, setRestaurantesList] = useState([])

  async function buscaDados(endpoint: string) {
    const response = await axios.get(endpoint)
    console.log('STATUS')
    console.log(response.status)
    console.log('DATA')
    console.log(response.data)
    setRestaurantesList(response.data)
  }

  useEffect(() => {
    buscaDados('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  }, [])

  return (
    <>
      <Header tipo_header={'grande'} />
      <Restaurantes lista_restaurantes={restaurantesList} />
      <Footer />
    </>
  )
}

export default Home
