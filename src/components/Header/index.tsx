import styled from 'styled-components'
import bkg_image from '../../assets/images/Vector_cabecalho.svg'
import logo from '../../assets/images/logo_efood.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { toogleCarrinho } from '../../features/carrinhoSlice'

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

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  width: 100%;
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
  const qtdCarrinho = useSelector(
    (state: RootState) => state.carrinhoReducer.itens.length
  )

  const dispach = useDispatch<AppDispatch>()

  return (
    <HeaderBar tipo_header={tipo_header}>
      {tipo_header === 'grande' ? (
        <>
          <ContentHeader>
            <Link to={'/'}>
              <img src={logo} alt="logo efood" />
            </Link>
          </ContentHeader>
          <TituloHeader>
            Viva experiências gastronômicas no conforto da sua casa
          </TituloHeader>
        </>
      ) : (
        <ContentHeader>
          <span>restaurante</span>
          <Link to={'/'}>
            <img src={logo} alt="logo efood" />
          </Link>
          <span 
          style={{ cursor: 'pointer' }}
          onClick={() => dispach(toogleCarrinho())}
          >
            {qtdCarrinho} produto(s) no carrinho
          </span>
        </ContentHeader>
      )}
    </HeaderBar>
  )
}

export default Header
