import styled from 'styled-components'
import { ContainerMd, cores } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { adicionarCarrinho } from '../../features/carrinhoSlice'
import Prato from '../../models/Prato'
import { toogleModal } from '../../features/modalSlice'

const ElementoPrato = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${cores.rosa};
  color: ${cores.creme};
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  z-index: 3;
  opacity: 1;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ImgPrato = styled.img`
  width: 280px;
`
const ConteudoPrato = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;

  button {
    background-color: ${cores.creme};
    color: ${cores.rosa};
    font-weight: bold;
    padding: 8px 16px;
    border: none;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`

function PratoDetalhes() {
  const dispach = useDispatch<AppDispatch>()
  const prato = useSelector((state: RootState) => state.pratoReducer)

  function addCarrinho(prato: Prato) {
    dispach(adicionarCarrinho(prato))
    dispach(toogleModal())
    window.scrollTo(0, 0)
  }

  return (
    <div className={ContainerMd}>
      <ElementoPrato>
        <ImgPrato src={prato.foto} />
        <ConteudoPrato>
          <h3>{prato.nome}</h3>
          <p>{prato.descricao}</p>
          <p>Porção: {prato.porcao}</p>
          <p>Valor: R${prato.preco}</p>
          <button onClick={() => addCarrinho(prato)}>
            Adicionar ao carrinho
          </button>
        </ConteudoPrato>
      </ElementoPrato>
    </div>
  )
}

export default PratoDetalhes
