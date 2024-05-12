import { Component, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoya Beauty';
  isMobile = true;
  @ViewChild(MatSidenav)

  sidenav!: MatSidenav;
  isCollapsed = true;
  /**
   *
  */
  isAdmin = false;
  loggedIn = true;
  isUser = false
  constructor(private _userService: UserService, private observer: BreakpointObserver) {

    this.isAdmin = _userService.roleMatch("admin")
    this.isUser = _userService.roleMatch("user")
    this.loggedIn = this._userService.loggedIn()
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });


  }
  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }


  }
}