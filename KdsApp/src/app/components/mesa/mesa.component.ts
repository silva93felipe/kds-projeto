import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Mesa } from 'src/app/models/mesa';

@Component({
    selector: 'app-mesa',
    templateUrl: './mesa.component.html',
    styleUrls: ['./mesa.component.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class MesaComponent implements OnInit {
    @Input() mesa!: Mesa;
    constructor(private _router: Router){}

    ngOnInit() {}

    public detalhes(mesaId: number){
        this._router.navigate(["tabs/tab1/itens-mesa"], { queryParams: { mesaId}});
    }
}
