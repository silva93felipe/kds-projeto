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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { removeOutline, addOutline, trash, cart, wallet } from 'ionicons/icons';
import { Produto } from '../models/produto';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
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
        NgFor,
        IonActionSheet,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardSubtitle, 
        IonCardTitle, 
    ],
})
export class Tab2Page {
    public produtos: Produto[] = [
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
        // {
        //   text: 'Fechar Pedido',
        //   role: 'cancel',
        //   data: {
        //     action: 'cancel',
        //   },
        // },
    ];

    constructor() {
        addIcons({ removeOutline, addOutline, trash, cart, wallet });
    }

    public handleQuantidade(action: string, produtoId: number){
        switch (action) {
            case "plus":
                ++this.produtos.find(p => p.id == produtoId)!.quantidade;
                break;
            case "minus":
                if(this.produtos.find(p => p.id == produtoId)!.quantidade > 0)
                    --this.produtos.find(p => p.id == produtoId)!.quantidade;
                break;
            default:
                break;
        }
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
}
