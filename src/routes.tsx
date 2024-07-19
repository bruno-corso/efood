import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurante from './pages/Restaurante'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante" element={<Restaurante />} />
    </Routes>
  )
}

export default Rotas
