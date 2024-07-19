import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'

function Home() {
  return (
    <>
      <Header tipo_header={'grande'} />
      <Restaurantes />
      <Footer />
    </>
  )
}

export default Home
