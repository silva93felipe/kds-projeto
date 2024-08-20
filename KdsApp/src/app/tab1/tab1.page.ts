import { Component } from '@angular/core';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonSearchbar,
    SearchbarInputEventDetail,
    IonSegment,
    IonSegmentButton,
    IonLabel,
} from '@ionic/angular/standalone';
import { MesaComponent } from '../components/mesa/mesa.component';
import { Mesa } from '../models/mesa';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, MesaComponent, NgFor, IonList, IonSearchbar, IonSegmentButton, IonLabel, IonSegment],
})
export class Tab1Page {
    public mesas: Mesa[] = [
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
    public mesaFilter = [ ...this.mesas];
    constructor() {}

    public handleInput(event: any){
        const input = event.target.value;
        this.mesaFilter = this.mesas.filter(mesa => mesa.codigo.indexOf(input) > -1);
    }

    public handleSegment(event: any){
        const valueChange = event.detail.value;
        this.mesaFilter = this.mesas.filter(mesa => mesa.status.indexOf(valueChange) > -1);
    }
}
