import styled from 'styled-components'

import foto from '../../assets/images/imagem_rest2.jpg'
import { ContainerMd, cores } from '../../styles'

const BannerComponent = styled.div`
  width: 100%;
  height: 280px;
  background-color: black;
  display: inline-block;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    z-index: 0;
    display: inline-block;
  }

  h4 {
    font-weight: bold;
    color: ${cores.branco};
    font-size: 32px;
    position: absolute;
    bottom: 30px;
    z-index: 1;
  }

  h5 {
    font-weight: lighter;
    color: ${cores.branco};
    font-size: 32px;
    position: absolute;
    top: 30px;
    z-index: 1;
  }
`

function Banner() {
  return (
    <BannerComponent>
        <img src={foto} alt="foto restaurante" />
      <ContainerMd>
        <h5>Italiana</h5>
        <h4>Restaurante</h4>
      </ContainerMd>
    </BannerComponent>
  )
}

export default Banner
