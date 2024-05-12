import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly ROUTE = "https://localhost:7158/api/account/";
  constructor(private http: HttpClient, private router: Router, private jwt: JwtHelperService) { }
  login(form: any) {
    return this.http.post(`${this.ROUTE}login`, form).pipe(map(res => res));
  }
  loggedIn() {
    if (localStorage.getItem('token') != null && !this.jwt.isTokenExpired(localStorage.getItem('token'))) {
      return true
    }
    return false
  }
  register(form: any) {
    return this.http.post(`${this.ROUTE}create`, form).pipe(map(res => res))
  }
  roleMatch(allowedRoles: string) {
    if (localStorage.getItem('token') == null) {
      return false
    };
    const payload = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]))
    let userRole = payload.role;
    if (userRole == allowedRoles) return true;
    return false;
  }
}