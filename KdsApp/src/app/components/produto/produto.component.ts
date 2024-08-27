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

  public handleQuantidade(action: string, produtoId: number){
    switch (action) {
        case "plus":
           // ++this.produtos.find(p => p.id == produtoId)!.quantidade;
            break;
        case "minus":
            //if(this.produtos.find(p => p.id == produtoId)!.quantidade > 0)
              //  --this.produtos.find(p => p.id == produtoId)!.quantidade;
            break;
        default:
            break;
    }
}

}
