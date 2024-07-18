import Footer from './components/Footer'
import Header from './components/Header'
import Restaurantes from './components/Restaurantes'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
        <Restaurantes/>
        <Footer />
      </Container>
    </>
  )
}

export default App
