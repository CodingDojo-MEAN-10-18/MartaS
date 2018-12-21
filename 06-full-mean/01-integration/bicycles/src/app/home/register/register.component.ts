import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
// import { User } from '../../models';
import { User } from 'src/app/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationErrors: string[] = [];
  user: User = new User();

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService,
  ) {}
  ngOnInit() {}

  onSubmit(user: User): void {
    this.auth.register(user).subscribe(createdUser => {
      console.log('created user:', createdUser);
      this.router.navigateByUrl('bikes');
    },
      error => {
        console.log('error', error);
        this.registrationErrors = [error.error];
      });
  }
}
