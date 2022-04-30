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


  get currentGame(): any {
    return this.contentService.game
  }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  get ownerIdd(): string {
    return this.contentService.game?._ownerId || '';
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

  likeGame(game: any, userId: string,): void {
    let arr = new Array(userId);

    this.contentService.editGameById(game._id, this.ownerId, game.likes.concat(arr), game).subscribe({
      next: () => {
        setTimeout(() => {

          this.router.navigate(['/games']);
        }, 3000)
      },
      error: (err) => {
        console.log(err);
      }
    })


  }


  liked(game: any, userId: string) {
    return !game.likes.includes(userId)
  }

}
