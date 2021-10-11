import { Routes } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home' },
  {
    path: 'home', loadChildren: () => import('./../home/home.module')
      .then(m => m.HomeModule)
  },
];









export default routes;
