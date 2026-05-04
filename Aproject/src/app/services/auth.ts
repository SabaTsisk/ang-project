import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isAuth = signal(false);
  user = signal<any>(null);

  signIn(userData?: any) {
    this.isAuth.set(true);
    if (userData) this.user.set(userData);
  }

  signOut() {
    this.isAuth.set(false);
    this.user.set(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('userId');
    localStorage.removeItem('order_history');
  }
}