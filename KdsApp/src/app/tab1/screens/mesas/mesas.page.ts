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
    IonRouterOutlet,
} from '@ionic/angular/standalone';
import { MesaComponent } from '../../../components/mesa/mesa.component';
import { Mesa } from '../../../models/mesa';
import { NgFor } from '@angular/common';
import { MesaMock } from 'src/app/mocks/MesaMock';

@Component({
    selector: 'app-mesas',
    templateUrl: 'mesas.page.html',
    styleUrls: ['mesas.page.scss'],
    standalone: true,
    imports: [IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, MesaComponent, NgFor, IonList, IonSearchbar, IonSegmentButton, IonLabel, IonSegment],
})
export class MesasPage {
    public mesas: Mesa[] = MesaMock.gerarMesas();
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
