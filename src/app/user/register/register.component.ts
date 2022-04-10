import { Component, OnDestroy} from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnDestroy {

  killSubscription = new Subject();

  form: FormGroup;

  constructor(
    
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      confirmpass: ['']
    });
  }

  register(): void {
    if (this.form.invalid) { return; }
    console.log(this.form)
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
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