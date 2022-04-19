import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
  ,
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }