import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';
import { UserService } from 'src/app/core/services/user.service';
import { IGame } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent  {

  games: IGame[] | undefined;
  arr : any;
  
  get userId(): string {
    return this.userService.user?._id || '';
  }
  constructor(private contentService: ContentService, private userService:UserService) {
    this.fetchGames();
  }

  fetchGames(): void {
    this.games = undefined;
    this.contentService.getMyPosts(this.userId).subscribe(data => {
      this.games = data;
       this.arr = Object.values(this.games);     

    })

  }

}
