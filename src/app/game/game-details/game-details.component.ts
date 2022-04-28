import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { IGame } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';
import { UserService } from '../../../app/core/services/user.service'



@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})

export class GameDetailsComponent {

  ownerId: any;
  game: IGame | undefined;
  idGame: any;
  likes: any;


  get userId(): string {
    return this.userService.user?._id || '';
  }




  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.fetchGame();


  }

  fetchGame(): void {
    this.game = undefined;
    const id = this.activatedRoute.snapshot.params.gameId;
    this.idGame = id;


    this.contentService.getGameById(id).subscribe((data) => {
      this.game = data;
      this.ownerId = data._ownerId;
      this.likes = this.game.likes;
      let newGame = this.game;
      this.game = newGame;
      console.log(this.game, '----game---');
      console.log(this.likes, '---likes----');
    })
  }

  delGame(id: string): void {
    this.contentService.delGameById(id).subscribe({
      next: () => {
        this.router.navigate(['/games'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  likeGame(game: any, userId: string): void {
    let arr = new Array(userId)
    console.log(arr,'---arr--')
    game.likes.concat(arr)
    console.log(game.likes,'-111--userIdlike--')
   
  this.contentService.editGameById(game._id,userId, game.likes.concat(arr),game).subscribe({
    next: (game) => {
      console.log(game,'---gameLiked--')
      this.router.navigate(['/games'])
    },
    error: (err) => {
      console.log(err)
    }
  })
  

  }

}
