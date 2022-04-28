import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent 
 {

  user: IUser | undefined;

  get userId(): any {
    return this.userService.user?._id
  }

  constructor(private userService: UserService) { }

  editProfile(form:any){
    console.log(form,'----form--')
  }

}
