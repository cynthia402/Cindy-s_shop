// src/app/app-routing.module.ts (or your custom routing module)
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // other routes...
  { 
    path: 'assets/images/products/:imageName', // define your route path
    redirectTo: 'assets/images/products/:imageName', // redirect to actual image location
    pathMatch: 'full' 
  },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
