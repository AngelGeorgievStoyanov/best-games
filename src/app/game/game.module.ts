import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './new-game/new-game.component';
import { GamesComponent } from './games/games.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameEditComponent } from './game-edit/game-edit.component';



@NgModule({
  declarations: [
    NewGameComponent,
    GamesComponent,
    GameEditComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    GameRoutingModule
  ]
})
export class GameModule { }
