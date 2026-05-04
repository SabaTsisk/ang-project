import { Component } from '@angular/core';
import { ApiAuth } from '../services/api-auth';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { Fogort } from '../fogort/fogort';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, Fogort],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private apiAuth: ApiAuth,
    private router: Router,
    private auth: Auth
  ) {}

  email = '';
  password = '';
  forgotShow = false;

  login(form: any) {
    this.apiAuth.login(form.value).subscribe({
      next: (resp: any) => {
        localStorage.setItem('access_token', resp.access_token);
        localStorage.setItem('refresh_token', resp.refresh_token);
        if (resp._id) localStorage.setItem('userId', resp._id);

        // Fetch profile so we have name + avatar in header
        const userId = resp._id || localStorage.getItem('userId');
        if (userId) {
          this.apiAuth.getProfileInfo(userId).subscribe({
            next: (profile: any) => {
              this.auth.signIn(profile);
              this.router.navigateByUrl('/home');
            },
            error: () => {
              this.apiAuth.getProfileInfo2().subscribe({
                next: (profile: any) => {
                  this.auth.signIn(profile);
                  this.router.navigateByUrl('/home');
                },
                error: () => {
                  this.auth.signIn();
                  this.router.navigateByUrl('/home');
                },
              });
            },
          });
        } else {
          this.auth.signIn();
          this.router.navigateByUrl('/home');
        }
      },
      error: (er) => alert(er.message),
    });
  }

  fogort() {
    this.forgotShow = true;
  }
}