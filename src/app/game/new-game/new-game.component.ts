import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { UserService } from 'src/app/core/services/user.service';
import { IGame } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {

  form: FormGroup;
  //likes: any=[];


  get userId(): string {
    return this.userService.user?._id || ''
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private userService: UserService,
  ) {


    this.form = this.fb.group({
      name: [''],
      description: [''],
      imageUrl: [''],
      _ownerId: this.userId,
      likes:[new Array]
   })
  }


  addGame(): void {
    if (this.form.invalid) { return }
    console.log(this.form.value)
    this.contentService.createGame(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/games'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

 

}
