import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { IGame } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})

export class GameDetailsComponent {


  game: IGame | undefined;
  idGame: any;
  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute) {
    this.fetchGame();

  }

  fetchGame(): void {
    this.game = undefined;
    const id = this.activatedRoute.snapshot.params.gameId;
    this.idGame=id;
    console.log(this.idGame,'---...... idGame')
    console.log(id, '---------------id')
    this.contentService.getGameById(id).subscribe((data) => {
      this.game = data
      console.log(data)

    })
  }



}
