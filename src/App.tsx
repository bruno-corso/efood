import { BrowserRouter } from 'react-router-dom'

import { Container, GlobalCss } from './styles'
import Rotas from './routes'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
  const statusModal = useSelector((state: RootState) => state.toogleModal.status)

  return (
    <BrowserRouter>
      <GlobalCss />
      {statusModal && <Modal />}
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  )
}

export default App
