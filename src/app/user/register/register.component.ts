import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { emailValidator, sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnDestroy {

  killSubscription = new Subject();

  form: FormGroup;
  errorMessage: string = '';

  constructor(

    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]],
      confirmpass: ['', [Validators.required, sameValueAsFactory(
        () => this.form?.get('password'), this.killSubscription
      )]]
    });
  }

  register(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.errorMessage = 'Place write register form.'
      return
    }
    console.log(this.form)
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.killSubscription.next('/home');
    this.killSubscription.complete();
  }

}