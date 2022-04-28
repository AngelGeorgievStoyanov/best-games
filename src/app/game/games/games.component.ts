import { Component } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';
import { IGame } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {


  games: IGame[] | undefined;
  arr : any;
  constructor(private contentService: ContentService) {
    this.fetchGames();
  }

  fetchGames(): void {
    this.games = undefined;
    this.contentService.getAllGames().subscribe(data => {
      this.games = data;
       this.arr = Object.values(this.games);     

    })

  }

}
