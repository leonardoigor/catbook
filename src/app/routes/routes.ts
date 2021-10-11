import { Routes } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home' },
  {
    path: 'home', loadChildren: () => import('./../home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'animais',
    loadChildren: () => import('./../animais/animais.module')
      .then(m => m.AnimaisModule),
  },
];









export default routes;
