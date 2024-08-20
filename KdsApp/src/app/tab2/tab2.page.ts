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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { removeOutline, addOutline, trash } from 'ionicons/icons';
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
        NgFor
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
            nome: "Pastel de frango",
            valor: 8,
            quantidade: 1
        }
    ]
    constructor() {
        addIcons({ removeOutline, addOutline, trash });
    }

    public handleQuantidade(action: string, produtoId: number){
        switch (action) {
            case "plus":
                console.log("somou");
                break;
            case "minus":
                console.log("diminuiu");
                break;
            default:
                break;
        }
    }
}
