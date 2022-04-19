import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auh.activate';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {
    path: 'games',
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
    path: ':gameId',
    component: GameDetailsComponent,
  },
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
