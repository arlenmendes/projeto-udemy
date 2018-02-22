class OrdemCompra {
  constructor(
    public endereco: string,
    public numero: number,
    public complemento: string,
    public opcaoPagamento: string,
    public itensOrdemCompra: ItemOrdemCompra[]
  ) {}
}

class ItemOrdemCompra {
  constructor(
    public quantidade: number,
    public menuId: string
  ) {}
}

export {OrdemCompra, ItemOrdemCompra}
