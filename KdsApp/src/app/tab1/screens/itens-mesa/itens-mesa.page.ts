import { Component } from '@angular/core';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonIcon,
    IonFooter,
    IonActionSheet,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { ProdutoMock } from 'src/app/mocks/ProdutoMock';
import { ProdutoComponent } from "../../../components/produto/produto.component";
import { Produto } from 'src/app/models/produto';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mesa } from 'src/app/models/mesa';
import { MesaMock } from 'src/app/mocks/MesaMock';
import { addIcons } from 'ionicons';
import { addOutline, cart, removeOutline, wallet } from 'ionicons/icons';

@Component({
    selector: 'app-itens-mesa',
    templateUrl: 'itens-mesa.page.html',
    styleUrls: ['itens-mesa.page.scss'],
    standalone: true,
    imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonIcon,
    IonFooter,
    IonActionSheet,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    NgFor,
    ProdutoComponent,
]
})
export class ItensMesaPage {
    private mesaIdParametroRota: number = 0;
    public produtos: Produto[] = ProdutoMock.gerarListaProduto();
    public mesas: Mesa[] = MesaMock.gerarMesas();
    public mesaSelecionada?: Mesa;
    public actionSheetButtons = [
        {
            text: 'Adicionar itens',
            role: 'selected',
            data: {
                action: 'delete',
            },
        },
        {
            text: 'Fechar pedido',
            role: 'destructive',
            data: {
              action: 'delete',
            },
        },
    ];

    constructor(private _router: Router, private _activedRote: ActivatedRoute ) {
        addIcons({ addOutline, removeOutline, cart, wallet })
        this.mesaIdParametroRota = _activedRote.snapshot.queryParams["mesaId"];
        if(this.mesaIdParametroRota){
            let mesa = this.mesas.find(e => e.id == this.mesaIdParametroRota);
            if(mesa)
                this.mesaSelecionada = mesa;
        }
    }

    public valorTotalItens(){
        return this.mesaSelecionada?.itens.reduce((acumulador, objeto) => {
            return acumulador += (objeto.valor * objeto.quantidade);
        }, 0)
    }

    public quantidadeTotalItens(){
        return this.mesaSelecionada?.itens.reduce((acumulador, objeto) => {
            return acumulador += objeto.quantidade;
        }, 0)
    }

    public getProdutos(){
        this._router.navigate(["tabs/tab1/produtos"]);
    }
}
