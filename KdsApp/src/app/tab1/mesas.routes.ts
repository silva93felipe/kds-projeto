import { Routes } from '@angular/router';
import { MesasPage } from './screens/mesas/mesas.page';
import { Tab1Page } from './tab1.page';

export const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'itens-mesa',
        loadComponent: () =>
          import('./screens/itens-mesa/itens-mesa.page').then((m) => m.ItensMesaPage),
      },
      {
        path: 'produtos',
        loadComponent: () =>
          import('./screens/produtos/produtos.page').then((m) => m.ProdutosPage),
      },
      {
        path: 'mesas',
        loadComponent: () =>
          import('./screens/mesas/mesas.page').then((m) => m.MesasPage),
      },
      {
        path: '',
        redirectTo: 'mesas',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'mesas',
    pathMatch: 'full',
  },
];
