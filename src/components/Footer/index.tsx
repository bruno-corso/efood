import styled from 'styled-components'
import bkg_image from '../../assets/images/Vector_cabecalho.svg'
import logo from '../../assets/images/logo_efood.png'
import insta from '../../assets/images/instagram.svg'
import face from '../../assets/images/facebook.svg'
import tt from '../../assets/images/twitter.svg'

const FooterBar = styled.footer`
  background-image: url(${bkg_image});
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 100%;
`
const LogoFooter = styled.img`
  padding-top: 40px;
`
const SocialFooter = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100px;
  justify-content: space-around;
`
const TextFooter = styled.span`
  font-size: 10px;
  text-align: center;
  width: 480px;
  margin-top: 60px;
`

function Footer() {
  return (
    <FooterBar>
      <LogoFooter src={logo} alt="logo efood" />
      <SocialFooter>
        <a href="#">
          <img src={insta} alt="instagram logo" />
        </a>
        <a href="#">
          <img src={tt} alt="twitter logo" />
        </a>
        <a href="#">
          <img src={face} alt="facebook logo" />
        </a>
      </SocialFooter>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </FooterBar>
  )
}

export default Footer
