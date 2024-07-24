import styled from 'styled-components'
import { cores } from '../../styles'
import ButtonTag from '../Button'
import { escolherRestaurante } from '../../features/getItensSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'

const CardContainer = styled.div`
  width: 480px;
  height: 460px;
  background-color: ${cores.branco};
  position: relative;
  border: 1px solid ${cores.rosa};
`
const CardImage = styled.img`
  width: 100%;
  height: 220px;
  top: 0;
  left: 0;
  object-fit: cover;
`
const CardTitle = styled.h3`
  font-size: 18px;
  position: absolute;
  top: 236px;
`
const CardText = styled.p`
  font-size: 14px;
  font-weight: normal;
  text-align: start;
  position: absolute;
  top: 270px;
  padding: 0 16px;
  line-height: 22px;
`

type Props = {
  titulo: string
  avaliacao: string
  descricao: string
  capa: string
  id: number
}

function CardRestaurante({ avaliacao, capa, descricao, titulo, id }: Props) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <CardContainer>
      <CardImage src={capa} alt="imagem restaurante" />
      <CardTitle style={{ left: 16 }}>{titulo.toUpperCase()}</CardTitle>
      <CardTitle style={{ right: 16 }}>{avaliacao} ✯</CardTitle>
      <CardText>{descricao}</CardText>
      <div
        onClick={() => dispatch(escolherRestaurante(id))}
        style={{ position: 'absolute', bottom: 16, left: 16 }}
      >
        <ButtonTag />
      </div>
    </CardContainer>
  )
}

export default CardRestaurante
