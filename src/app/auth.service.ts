import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(email: string, password: string) {
    this.isLoggedIn = true;
  }

  register(email: string, password: string) {
    // Registration logic here
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
