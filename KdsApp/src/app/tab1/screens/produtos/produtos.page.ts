import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonBackButton, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar, } from '@ionic/angular/standalone';
import { ProdutoMock } from 'src/app/mocks/ProdutoMock';
import { Produto } from 'src/app/models/produto';
import { ProdutoComponent } from "../../../components/produto/produto.component";

@Component({
    selector: 'app-produtos',
    templateUrl: 'produtos.page.html',
    styleUrls: ['produtos.page.scss'],
    standalone: true,
    imports: [IonContent, IonList,
        IonItem, IonButton, IonLabel, IonIcon, NgFor, 
        ProdutoComponent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonBadge],
})
export class ProdutosPage {
    public produtos: Produto[] = ProdutoMock.gerarListaProduto();
    constructor() {}
}
