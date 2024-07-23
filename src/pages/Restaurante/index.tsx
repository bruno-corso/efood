import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Pratos from '../../components/Pratos'
import { ContainerMd } from '../../styles'
import { RootState, AppDispatch } from '../../store'
import { decrementar, incrementar, incrementarValor } from '../../features/counterSlice'

function Restaurante() {

  const valor = useSelector((state: RootState) => state.contadorDeValor.value)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <Header tipo_header={'pequeno'} />
      <Banner />
      <button onClick={() => dispatch(incrementar())}>Clique para somar</button>
      <button onClick={() => dispatch(decrementar())}>Clique para subtrair</button>
      <button onClick={() => dispatch(incrementarValor(5))}>Clique para somar 5</button>
      <p>Valor: {valor}</p>
      <ContainerMd>
        <Pratos />
      </ContainerMd>
      <Footer />
    </>
  )
}

export default Restaurante
