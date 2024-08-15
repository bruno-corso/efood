import { BrowserRouter } from 'react-router-dom'

import { Container, GlobalCss } from './styles'
import Rotas from './routes'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import Carrinho from './components/Carrinho'

function App() {
  const statusModal = useSelector(
    (state: RootState) => state.toogleModal.status
  )

  const statusCarrinho = useSelector(
    (state: RootState) => state.carrinhoReducer.visual
  )

  return (
    <BrowserRouter>
      <GlobalCss />
      {statusModal && <Modal />}
      {statusCarrinho && <Carrinho />}
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  )
}

export default App
