import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auh.activate';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{
    path: 'login',
    component: LoginComponent,
    canActivate :[AuthActivate],
    data:{
      authenticationRequired:false,
      authenticationFailureRedirectUrl: '/home',
    }

},
{
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/home',
    }
}
];


export const UserRoutingModule = RouterModule.forChild(routes)