import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrors: string[] = [];
  user: User = new User();

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) { }

  ngOnInit() { }

  onSubmit(user: User): void {
    this.auth.login(user).subscribe(loggedUser => {
      console.log('logged user:', loggedUser);
      this.router.navigateByUrl('bikes');
    },
      error => {
        console.log('error', error);
        this.loginErrors = [error.error];
      });
  }
}
