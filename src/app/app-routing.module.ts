import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
  { path: 'login-page', component: LoginPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LoginPageComponent]
