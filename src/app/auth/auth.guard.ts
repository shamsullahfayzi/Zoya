import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  /**
   *
   */
  constructor(private router: Router, private userService: UserService, private jwt: JwtHelperService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null && !this.jwt.isTokenExpired(localStorage.getItem('token'))) {

      let roles = next.data['permittedRoles'] as string;
      if (roles) {
        if (this.userService.roleMatch(roles)) return true;
        else {
          this.router.navigate(['/forbidden']);
        }
      }
      return true;
    }

    else {
      this.router.navigate(["/login"])
      return false;
    }
  }

}