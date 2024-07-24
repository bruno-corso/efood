// import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Pratos from '../../components/Pratos'
import { ContainerMd } from '../../styles'
// import { RootState, AppDispatch } from '../../store'
// import { decrementar, incrementar, incrementarValor } from '../../features/counterSlice'

function Restaurante() {
  //REDUX CONTADOR
  // const valor = useSelector((state: RootState) => state.contadorDeValor.value)
  // const dispatch = useDispatch<AppDispatch>()

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
