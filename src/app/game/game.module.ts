import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './new-game/new-game.component';
import { GamesComponent } from './games/games.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game/game.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewGameComponent,
    GamesComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    GameRoutingModule
  ]
})
export class GameModule { }
