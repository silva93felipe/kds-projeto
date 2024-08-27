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
import { Route, Router } from '@angular/router';

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
    public produtos: Produto[] = ProdutoMock.gerarListaProduto();
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

    constructor(private _router: Router) {
    }

    public valorTotalItens(){
        return this.produtos.reduce((acumulador, objeto) => {
            return acumulador += (objeto.valor * objeto.quantidade);
        }, 0)
    }

    public quantidadeTotalItens(){
        return this.produtos.reduce((acumulador, objeto) => {
            return acumulador += objeto.quantidade;
        }, 0)
    }

    public getProdutos(){
        this._router.navigate(["tabs/tab1/produtos"]);
    }
}
