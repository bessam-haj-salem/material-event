import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { TargetComponent } from './target/target.component';

const routes: Routes = [
  {
    path:'material',
    component: MaterialComponent
  },
  {
    path:'target',
    component: TargetComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
