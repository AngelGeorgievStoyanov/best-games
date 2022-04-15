import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auh.activate';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {
    path: 'games',

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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
