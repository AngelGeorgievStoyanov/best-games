import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/validators';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailValidator = emailValidator;
  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userServise: UserService,
    private router: Router
  ) { }

  login(form: NgForm):void {
    this.errorMessage = '';
    if (form.invalid) {
      this.errorMessage = 'Place write login form.'
     return 
    }
    this.errorMessage = '';
    const { email, password } = form.value;
    this.userServise.login({ email, password }).subscribe({
      next: () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/home';
        this.router.navigate([redirectUrl])
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        
      
      }
    })
  }


}
