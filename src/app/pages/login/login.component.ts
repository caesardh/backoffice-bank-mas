import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cashierId: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const cashierId = form.value.cashierId;
    const password = form.value.password;

    let authObsrv: Observable<AuthResponseData>;

    authObsrv = this.authService.login(cashierId, password);

    authObsrv.subscribe(
      res => {
        this.router.navigate(['/dashboard']);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    )
  }
}
