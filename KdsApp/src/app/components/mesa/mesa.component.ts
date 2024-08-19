import { Component, Input, OnInit } from '@angular/core';
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
    constructor() {}

    ngOnInit() {}
}
