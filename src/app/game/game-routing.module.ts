import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auh.activate';
import { NotFoundComponent } from '../not-found/not-found.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GamesComponent } from './games/games.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GamesComponent

  },
  {
    path: 'new-game',
    component: NewGameComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  },
  {
    path: 'edit',
    component: GameEditComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  },
  {
    path: 'details/:gameId',
    pathMatch: "full",
    component: GameDetailsComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  },
  {
    path: 'edit/:gameId',
    pathMatch: "full",
    component: GameEditComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  }
  ,
  {
    path:'my-games',
    pathMatch:"full",
    component: MyGamesComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
    
  }
  


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
