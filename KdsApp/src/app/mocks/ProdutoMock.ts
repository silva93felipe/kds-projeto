import { Produto } from "../models/produto";

export class ProdutoMock{
    static gerarListaProduto(): Produto[]{
        return  [
            {
                id: 1,
                nome: "Sorteve 300ml Morango",
                valor: 3,
                quantidade: 1
            },
            {
                id: 2,
                nome: "Pastel de carne de sol",
                valor: 10,
                quantidade: 1
            },
            {
                id: 3,
                nome: "Soco de uva 300ml",
                valor: 5,
                quantidade: 1
            },
            {
                id: 4,
                nome: "Açaí de 500ml",
                valor: 15,
                quantidade: 1
            },
            {
                id: 5,
                nome: "Açaí de 500ml",
                valor: 15,
                quantidade: 1
            },
            {
                id: 6,
                nome: "Pastel de frango",
                valor: 8,
                quantidade: 1
            },
            {
                id: 7,
                nome: "Pastel de frango",
                valor: 8,
                quantidade: 1
            },
            {
                id: 8,
                nome: "Pastel de frango",
                valor: 8,
                quantidade: 1
            },
            {
                id: 9,
                nome: "Pastel de frango",
                valor: 8,
                quantidade: 1
            },
            {
                id: 10,
                nome: "Pastel de frango",
                valor: 8,
                quantidade: 1
            },
            {
                id: 11,
                nome: "Pastel de frango",
                valor: 8,
                quantidade: 1
            },
            {
                id: 12,
                nome: "Pastel de frango",
                valor: 8,
                quantidade: 1
            }
        ];
    }
}