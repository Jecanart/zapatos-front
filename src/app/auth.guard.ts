import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router); // Inject Router

  // Check if the user is logged in
  if (authService.isLoggedIn()) {
    return true;
  } else {
    // Redirect to the login page if not logged in
    router.navigate(['/login']);
    return false;
  }
};

