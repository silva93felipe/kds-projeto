import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, } from '@ionic/angular/standalone';
import { Produto } from 'src/app/models/produto';
import { removeOutline, addOutline, trash, cart, wallet } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  standalone: true,
  imports: [IonContent, IonList, IonItem, IonButton, IonLabel, IonIcon, NgFor ],
})
export class ProdutoComponent  implements OnInit {
  @Input() produto!: Produto;
  constructor() {
  }
  
  ngOnInit() {
    addIcons({ removeOutline, addOutline, trash, cart, wallet });
    
  }

  public handleQuantidade(action: string, produto: Produto){
    switch (action) {
        case "plus":
            ++produto.quantidade;
            break;
        case "minus":
            --produto.quantidade;
            break;
        default:
            break;
    }
}

}
