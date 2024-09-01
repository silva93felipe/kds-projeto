export class Mesa{
    id!: number;
    codigo!: string;
    status!: string;
    chegada!: Date;
    itens!: ItemMesa[]
}

export class ItemMesa{
    id!: number;
    codigo!: string;
    nome!: string;
    quantidade!: number;
    valor!: number;
}