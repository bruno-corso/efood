import styled from 'styled-components'
import bkg_image from '../../assets/images/Vector_cabecalho.svg'
import logo from '../../assets/images/logo_efood.png'

const HeaderBar = styled.header`
  background-image: url(${bkg_image});
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 100%;
  margin-bottom: 60px; 
`

const LogoHeader = styled.img`
  padding-top: 40px;
`

const TituloHeader = styled.h2`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  width: 540px;
  margin: 0 auto;
  margin-top: 60px;
`

function Header() {
  return (
    <HeaderBar>
      <LogoHeader src={logo} alt="logo efood" />
      <TituloHeader>
        Viva experiências gastronômicas no conforto da sua casa
      </TituloHeader>
    </HeaderBar>
  )
}

export default Header
