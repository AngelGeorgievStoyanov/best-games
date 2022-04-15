import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent  {

  constructor(private router: Router, private contentService:ContentService) { }


  addGame(form:NgForm):void{
    if(form.invalid){return}
    console.log(form.value)
    this.contentService.createGame(form.value).subscribe({
      next:()=>{
        this.router.navigate(['/games'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
