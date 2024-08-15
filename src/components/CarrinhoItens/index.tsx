import styled from 'styled-components'
import { cores } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { FaRegTrashCan } from 'react-icons/fa6'
import { removerCarrinho } from '../../features/carrinhoSlice'
import { useEffect, useState } from 'react'

const ListaItensContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${cores.rosa};
  font-weight: bold;
  margin: 16px;

  h3 {
    color: #FFF;
  }
`
const ConteudoItem = styled.div`
  display: flex;
  background-color: ${cores.creme};
  flex-direction: row;
  gap: 16px;
  padding: 8px 16px;
  align-items: center;

  img {
    width: 60px;
    border-radius: 8px;
  }

  p {
    font-weight: 300;
    margin-bottom: 8px;
    font-size: 14px;
  }
`

const BotaoPagar = styled.button`
  margin-left: 16px;
  padding: 8px 0;
  width: calc(100% - 32px);
  background-color: ${cores.creme};
  color: ${cores.rosa};
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

function CarrinhoItens() {
  const dispach = useDispatch<AppDispatch>()
  const itens_carrinho = useSelector(
    (state: RootState) => state.carrinhoReducer.itens
  )

  const [valorTotal, setValorTotal] = useState('');

  useEffect(() => {
    const valores = itens_carrinho.map((item) => item.preco)
    const soma = valores.reduce((acc, e) => acc + e, 0)
    const somaFormatado = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(soma);
    setValorTotal(somaFormatado)
  }, [itens_carrinho])

  return (
    <>
      <ListaItensContent>
        {itens_carrinho.map((item) => (
          <ConteudoItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h5>{item.nome}</h5>
              <p>{item.porcao}</p>
              <p>R$ {item.preco}</p>
            </div>
            <FaRegTrashCan
              style={{ marginLeft: 'auto', cursor: 'pointer' }}
              onClick={() => dispach(removerCarrinho(item.id))}
            />
          </ConteudoItem>
        ))}
        <h3>Valor total: R$ {valorTotal}</h3>
      </ListaItensContent>
      <BotaoPagar>Continuar com entrega</BotaoPagar>
    </>
  )
}

export default CarrinhoItens
