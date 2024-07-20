import Prato from "../Prato/indes"


class Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Prato[]

  constructor(
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: string,
    descricao: string,
    capa: string,
    cardapio: Prato[]
  ) {
    ;(this.id = id),
      (this.titulo = titulo),
      (this.destacado = destacado),
      (this.tipo = tipo),
      (this.avaliacao = avaliacao),
      (this.descricao = descricao),
      (this.capa = capa),
      (this.cardapio = cardapio)
  }
}

export default Restaurante