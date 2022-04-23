import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { IGame } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';



@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})

export class GameDetailsComponent {


  game: IGame | undefined;
  idGame: any;
  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute, private router:Router) {
    this.fetchGame();
  

  }

  fetchGame(): void {
    this.game = undefined;
    const id = this.activatedRoute.snapshot.params.gameId;
    this.idGame=id;
  
    
    this.contentService.getGameById(id).subscribe((data) => {
      this.game = data
      console.log(data)

    })
  }

  delGame(id:string):void{
  this.contentService.delGameById(id).subscribe({
    next:()=>{
      this.router.navigate(['/games'])
    },
    error:(err)=>{
      console.log(err)
    }
  })
  }



}
