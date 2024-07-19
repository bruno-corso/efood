import styled from 'styled-components'
import { cores } from '../../styles'
import foto from '../../assets/images/imagem_pizza.png'
import ButtonFinalizar from '../ButtonFinalizar'

const CardContainer = styled.div`
  width: 320px;
  height: 380px;
  background-color: ${cores.rosa};
  padding: 10px;
  position: relative;
`
const CardImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  top: 0;
  left: 0;
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

function CardPrato() {
  return (
    <CardContainer>
      <div style={{ height: '325px' }}>
        <CardImage src={foto} alt="imagem restaurante" />
        <CardTitle style={{ left: 16 }}>Restaurante de Sushi</CardTitle>
        <CardText>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </CardText>
      </div>
      <ButtonFinalizar />
    </CardContainer>
  )
}

export default CardPrato
