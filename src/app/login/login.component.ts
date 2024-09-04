import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    const form = event.target as HTMLFormElement;
    this.email = (form.elements.namedItem('email') as HTMLInputElement).value;
    this.password = (form.elements.namedItem('password') as HTMLInputElement).value;

    this.emailError = '';
    this.passwordError = '';

    if (!this.email) {
      this.emailError = 'Email is required.';
    }

    if (!this.password) {
      this.passwordError = 'Password is required.';
    }

    if (!this.emailError && !this.passwordError) {
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['']); // Redirige a una página segura
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
    }
  }
}







