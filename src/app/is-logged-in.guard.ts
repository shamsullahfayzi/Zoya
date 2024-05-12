import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class isLoggedInGuard implements CanActivate {
  /**
   *
   */
  constructor(private router: Router, private jwt: JwtHelperService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null && !this.jwt.isTokenExpired(localStorage.getItem('token'))) {
      return false
    }
    return true


  }

}