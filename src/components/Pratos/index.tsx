import styled from 'styled-components'
import CardPrato from '../CardPrato'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useState } from 'react'

const ListRestaurantes = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 40px;
  grid-template-columns: 320px 320px 320px;
  margin: 60px auto;
`

function Pratos() {
  const restauranteSelecionado = useSelector(
    (state: RootState) => state.buscaItensApi.itens
  )
  const pratosSelecionados = restauranteSelecionado[0].cardapio

  const [pratoModal, setPratoModal] = useState(null);

  return (
    <ListRestaurantes>
      {pratosSelecionados.map((prato) => (
        <CardPrato
          key={prato.id}
          descricao={prato.descricao}
          foto={prato.foto}
          nome={prato.nome}
          porcao={prato.porcao}
          preco={prato.preco}
          id={prato.id}
        />
      ))}
    </ListRestaurantes>
  )
}

export default Pratos
