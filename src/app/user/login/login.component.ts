import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(
    private activatedRoute: ActivatedRoute,
    private userServise: UserService,
    private router: Router
  ) { }

  login(form: NgForm): void {
    if (form.invalid) { return; }
    const { email, password } = form.value;
    this.userServise.login({ email, password }).subscribe({
      next: () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/home';
        this.router.navigate([redirectUrl])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}
