import { Mesa } from "../models/mesa";

export class MesaMock{
    static gerarMesas(): Mesa[]{
        return  [
            {
                id: 1,
                codigo: "001",
                status: "ABERTA",
                chegada: new Date(),
                itens: []
            },
            {
                id: 2,
                codigo: "002",
                status: "ABERTA",
                chegada: new Date(),
                itens: []
            },
            {
                id: 3,
                codigo: "003",
                status: "ATENDIMENTO",
                chegada: new Date(),
                itens: [
                    {
                        id: 1,
                        codigo: "10",
                        nome: "Sorteve 300ml Morango",
                        valor: 3,
                        quantidade: 1
                    },
                    {
                        id: 2,
                        codigo: "10",
                        nome: "Pastel de carne de sol",
                        valor: 10,
                        quantidade: 1
                    },
                    {
                        id: 3,
                        codigo: "10",
                        nome: "Soco de uva 300ml",
                        valor: 5,
                        quantidade: 1
                    },
                    {
                        id: 4,
                        codigo: "10",
                        nome: "Açaí de 500ml",
                        valor: 15,
                        quantidade: 1
                    },
                    {
                        id: 5,
                        codigo: "10",
                        nome: "Açaí de 500ml",
                        valor: 15,
                        quantidade: 1
                    },
                    {
                        id: 6,
                        codigo: "10",
                        nome: "Pastel de frango",
                        valor: 8,
                        quantidade: 1
                    },
                ]
            },
            {
                id: 4,
                codigo: "004",
                status: "ATENDIMENTO",
                chegada: new Date(),
                itens: []
            },
            {
                id: 5,
                codigo: "005",
                status: "ATENDIMENTO",
                chegada: new Date(),
                itens: []
            },
            {
                id: 6,
                codigo: "006",
                status: "ATENDIMENTO",
                chegada: new Date(),
                itens: []
            }
        ];
    }
}