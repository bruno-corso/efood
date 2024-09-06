import styled from 'styled-components'
import { cores } from '../../styles'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { toogleCarrinho } from '../../features/carrinhoSlice'
import CarrinhoItens from '../CarrinhoItens'

const CarrinhoOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
  z-index: 2;
  position: fixed;
  display: flex;
`
const CarrinhoContent = styled.div`
  width: 35%;
  height: 100%;
  background-color: ${cores.rosa};
  z-index: 3;
  position: absolute;
  top: 0%;
  right: 0%;
`

function Carrinho() {
  const dispach = useDispatch<AppDispatch>()

  return (
    <>
      <CarrinhoOverlay onClick={() => dispach(toogleCarrinho())} />
      <CarrinhoContent>
        <CarrinhoItens />
      </CarrinhoContent>
    </>
  )
}

export default Carrinho
