import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';  // URL base de tu API Rails
  private loginUrl = 'http://localhost:3000/login'; // URL del endpoint de inicio de sesión
  private logoutUrl = 'http://localhost:3000/logout'; // URL del endpoint de cierre de sesión
  private loggedInUrl = 'http://localhost:3000/logged_in';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post<any>(this.loginUrl, payload);
  }

  logout(): Observable<any> {
    return this.http.delete<any>(this.logoutUrl);
  }

  isLoggedIn(): Observable<any> {
    return this.http.get<any>(this.loggedInUrl);
  }

  // Método para registrar un nuevo usuario
  register(userName: string, email: string, password: string): Observable<any> {
    const payload = { user: { user_name: userName, user_mail: email, user_password: password } };
    return this.http.post<any>(`${this.baseUrl}/register`, payload);
  }
}
