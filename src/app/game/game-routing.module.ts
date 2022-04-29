import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auh.activate';
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
    component: GameEditComponent
  },
  {
    path: 'details/:gameId',
    pathMatch: "full",
    component: GameDetailsComponent,

  },
  {
    path: 'edit/:gameId',
    pathMatch: "full",
    component: GameEditComponent
  }
  ,
  {
    path:'my-games',
    pathMatch:"full",
    component: MyGamesComponent,
    
  }


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
