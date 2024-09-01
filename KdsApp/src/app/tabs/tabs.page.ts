import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { fastFood, fastFoodOutline, storefront, storefrontOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public selectedTab: string = '';
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ fastFoodOutline, storefrontOutline, fastFood, storefront });
  }

  onTabChange(event: any) {    
    this.selectedTab = event.tab;
  }

}
