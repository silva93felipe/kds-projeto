export interface Pedido{
    id: number,
    status: StatusPedido,
    mesaId: number,
    codigoMesa: string,
    itens: ItemPedido[]
}

export interface ItemPedido{
    id: number,
    pedidoId: number,
    quantidade: number,
    status: StatusItemPedido,
    observacao: string,
    descricao: string
}

export enum StatusPedido{
    PENDENTE,
    ENTREGUE,
    ACEITO,
    PRONTO
}

export enum StatusItemPedido{
    PRONTO,
    ENTREGUE
}

