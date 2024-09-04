import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  userNameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    const form = event.target as HTMLFormElement;
    this.userName = (form.elements.namedItem('userName') as HTMLInputElement).value;
    this.email = (form.elements.namedItem('email') as HTMLInputElement).value;
    this.password = (form.elements.namedItem('password') as HTMLInputElement).value;
    this.confirmPassword = (form.elements.namedItem('confirmPassword') as HTMLInputElement).value;

    this.userNameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';

    // Validación de los campos del formulario
    if (!this.userName) {
      this.userNameError = 'Username is required.';
    }

    if (!this.email) {
      this.emailError = 'Email is required.';
    } else if (!this.validateEmail(this.email)) {
      this.emailError = 'Invalid email format.';
    }

    if (!this.password) {
      this.passwordError = 'Password is required.';
    }

    if (!this.confirmPassword) {
      this.confirmPasswordError = 'Please confirm your password.';
    } else if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = 'Passwords do not match.';
    }

    if (!this.userNameError && !this.emailError && !this.passwordError && !this.confirmPasswordError) {
      this.authService.register(this.userName, this.email, this.password).subscribe({
        next: (response) => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Registration error', error);
        }
      });
    }
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}


