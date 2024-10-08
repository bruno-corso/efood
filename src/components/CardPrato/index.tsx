import styled from 'styled-components'
import { cores } from '../../styles'
import ButtonFinalizar from '../ButtonFinalizar'
import Prato from '../../models/Prato'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { escolherPrato } from '../../features/pratoSlice'

const CardContainer = styled.div`
  width: 320px;
  height: 380px;
  background-color: ${cores.rosa};
  padding: 10px;
  position: relative;
  cursor: pointer;
`
const CardImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  top: 0;
  left: 0;

  &:hover {
    scale: 1.01;
    transition: 0.1s ease-in;
  }
`
const CardTitle = styled.h3`
  font-size: 18px;
  position: absolute;
  color: ${cores.branco};
  top: 190px;
`
const CardText = styled.p`
  font-size: 14px;
  font-weight: normal;
  text-align: start;
  color: ${cores.branco};
  position: absolute;
  top: 220px;
  padding: 0 8px;
  line-height: 22px;
`

function CardPrato({ descricao, foto, nome, id, porcao, preco }: Prato) {
  const dispatch = useDispatch<AppDispatch>()

  const restaurante = useSelector(
    (state: RootState) => state.buscaItensApi.itens[0].titulo
  )

  const pratoSelecionado: Prato = {
    id: id,
    foto: foto,
    preco: preco,
    nome: nome,
    descricao: descricao,
    porcao: porcao,
    restaurante: restaurante,
  }

  return (
    <CardContainer onClick={() => dispatch(escolherPrato(pratoSelecionado))}>
      <div style={{ height: '325px' }}>
        <CardImage src={foto} alt="imagem restaurante" />
        <CardTitle style={{ left: 16 }}>{nome}</CardTitle>
        <CardText>{descricao.substring(0, 150) + '...'}</CardText>
      </div>
      <ButtonFinalizar texto="Ver Mais" />
    </CardContainer>
  )
}

export default CardPrato
