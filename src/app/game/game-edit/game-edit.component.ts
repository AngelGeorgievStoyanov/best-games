import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { IGame } from 'src/app/shared/interfaces/game';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent {

  game: IGame | undefined;
  idGame: any;
  oneGame: any;

  ownerId: any;

  get likess(): any {
    return this.game?.likes
  }

  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute, private router: Router,) {
    this.fetchGame();

  }

  fetchGame(): void {
    this.game = undefined;
    const id = this.activatedRoute.snapshot.params.gameId;
    this.idGame = id;

    console.log(this.idGame, '---...... idGame')
    console.log(id, '---------------id')
    this.contentService.getGameById(id).subscribe((data) => {
      this.game = (data)
      this.oneGame = Object.values(this.game)
      this.ownerId = this.oneGame[3]

    })
  }


  editGame(idGame: any, ownerId: any, form: NgForm): void {
    console.log(this.likess,'-----likeees')
    console.log(form.value)
    this.contentService.editGameById(idGame, ownerId,this.likess, form.value).subscribe({
      next: () => {
        this.router.navigate(['/games'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
