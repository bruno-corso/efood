import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  creme: '#FFF8F2',
  creme_escuro: '##FFEBD9',
  laranjo: '#FFB930',
  branco: '#FFFFFF',
  preto: '#000000',
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.creme};
        color: ${cores.rosa}
    }
`

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`

export const ContainerMd = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
