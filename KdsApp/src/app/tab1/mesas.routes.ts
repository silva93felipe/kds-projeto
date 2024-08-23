import { Routes } from '@angular/router';
import { MesasPage } from './mesas.page';

export const routes: Routes = [
  {
    path: '',
    component: MesasPage,
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
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
