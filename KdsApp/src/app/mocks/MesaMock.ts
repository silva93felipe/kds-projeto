import { Mesa } from "../models/mesa";

export class MesaMock{
    static gerarMesas(): Mesa[]{
        return  [
            {
                id: 1,
                codigo: "001",
                status: "ABERTA",
                chegada: new Date()
            },
            {
                id: 2,
                codigo: "002",
                status: "ABERTA",
                chegada: new Date()
            },
            {
                id: 3,
                codigo: "003",
                status: "ATENDIMENTO",
                chegada: new Date()
            },
            {
                id: 4,
                codigo: "004",
                status: "ATENDIMENTO",
                chegada: new Date()
            },
            {
                id: 4,
                codigo: "004",
                status: "ATENDIMENTO",
                chegada: new Date()
            },
            {
                id: 4,
                codigo: "004",
                status: "ATENDIMENTO",
                chegada: new Date()
            }
        ];
    }
}