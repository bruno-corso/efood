class Prato {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  restaurante?: string

  constructor(
    id: number,
    foto: string,
    preco: number,
    nome: string,
    descricao: string,
    porcao: string,
    restaurante: string
  ) {
    ;(this.id = id),
      (this.foto = foto),
      (this.preco = preco),
      (this.nome = nome),
      (this.descricao = descricao),
      (this.porcao = porcao),
      (this.restaurante = restaurante)
  }
}

export default Prato
