import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Pratos from '../../components/Pratos'
import { ContainerMd } from '../../styles'

function Restaurante() {
  return (
    <>
      <Header tipo_header={'pequeno'} />
      <Banner />
      <ContainerMd>
        <Pratos />
      </ContainerMd>
      <Footer />
    </>
  )
}

export default Restaurante
