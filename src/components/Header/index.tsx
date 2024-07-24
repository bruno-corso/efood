import styled from 'styled-components'
import bkg_image from '../../assets/images/Vector_cabecalho.svg'
import logo from '../../assets/images/logo_efood.png'
import { Link } from 'react-router-dom'

type PropsHeader = {
  tipo_header: 'grande' | 'pequeno'
}

const HeaderBar = styled.header<PropsHeader>`
  background-image: url(${bkg_image});
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* height: 300px; */
  height: ${(props) => (props.tipo_header === 'grande' ? '300px' : '175px')};
  width: 100%;
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

function Header({ tipo_header }: PropsHeader) {
  return (
    <HeaderBar tipo_header={tipo_header}>
      <Link to={'/'}>
        <LogoHeader src={logo} alt="logo efood" />
      </Link>
      {tipo_header === 'grande' ? (
        <TituloHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </TituloHeader>
      ) : (
        ''
      )}
    </HeaderBar>
  )
}

export default Header
