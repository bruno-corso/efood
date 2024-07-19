import styled from 'styled-components'
import { cores } from '../../styles'
import foto from '../../assets/images/imagem_rest1.jpg'
import ButtonTag from '../Button'

const CardContainer = styled.div`
  width: 480px;
  height: 420px;
  background-color: ${cores.branco};
  position: relative;
  border: 1px solid ${cores.rosa}
`
const CardImage = styled.img`
  width: 100%;
  height: 220px;
  top: 0;
  left: 0;
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

function CardRestaurante() {
  return (
    <CardContainer>
      <CardImage src={foto} alt="imagem restaurante" />
      <CardTitle style={{ left: 16 }}>Restaurante de Sushi</CardTitle>
      <CardTitle style={{ right: 16 }}>4.9 ✯</CardTitle>
      <CardText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure qui quasi
        ipsam hic voluptatem minus quas maxime praesentium ea cumque dolorum
        corporis voluptatum, odio aperiam repudiandae fugiat illo magnam veniam.
      </CardText>
      <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
        <ButtonTag />
      </div>
    </CardContainer>
  )
}

export default CardRestaurante
