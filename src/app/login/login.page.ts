import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  showErrorMessage: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Let's assume the correct username and password are 'user' and 'password'
    if (this.username === '12522026' && this.password === 'halo@gmail.com') {
      // Logic for successful login - redirect to another page, set authentication, etc.
      console.log('Login successful!');
      // Redirect to a specific tab
      this.router.navigate(['/tabs']); // Ganti dengan rute tab yang diinginkan
    } else {
      // If the username or password is incorrect, show error message
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 3000); // Hide error message after 3 seconds
    }
  }
}
