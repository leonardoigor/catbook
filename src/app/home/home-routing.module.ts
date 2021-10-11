import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouter } from './routes';

;

@NgModule({
  imports: [RouterModule.forChild(HomeRouter)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
