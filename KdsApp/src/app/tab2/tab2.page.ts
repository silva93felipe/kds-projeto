import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonBackButton, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonSearchbar, IonToolbar } from '@ionic/angular/standalone';
import { ProdutoComponent } from '../components/produto/produto.component';
import { Produto } from '../models/produto';
import { ProdutoMock } from '../mocks/ProdutoMock';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    standalone: true,
    imports: [IonContent, IonList,
        IonItem, IonButton, IonLabel, IonIcon, NgFor, 
        ProdutoComponent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonBadge, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent],
})
export class Tab2Page {
    public produtos: Produto[] = ProdutoMock.gerarListaProduto();
    public produtosFilter = [ ...this.produtos];
    constructor() {}

    public handleInput(event: any){
        const input = String(event.target.value).toLocaleLowerCase();
        this.produtosFilter = this.produtos.filter(produto => produto.nome.toLocaleLowerCase().indexOf(input) > -1);
    }

    carregarMaisProdutos(event: any){

    }
   
}
