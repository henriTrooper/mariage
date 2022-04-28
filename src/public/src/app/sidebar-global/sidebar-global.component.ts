import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SidebarGlobalService } from './sidebar-global.service';

@Component({
  selector: 'app-sidebar-global',
  templateUrl: './sidebar-global.component.html',
  styleUrls: ['./sidebar-global.component.css']
})
export class SidebarGlobalComponent implements OnInit {
  user: SocialUser;
  newWidth;
  size = true

  menus = [];
  constructor(public sidebarGlobalService: SidebarGlobalService,
     public auth: AuthService,
     private router: Router,
     private socialAuthService: SocialAuthService,) {
    this.menus = sidebarGlobalService.getMenuList();
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
    });
    document.querySelector('#FirstBody').setAttribute('style', 'overflow:visible');
  }

   // Open/close nav
   toggleSidebar(): void {
    this.sidebarGlobalService.setSidebarState(!this.sidebarGlobalService.getSidebarState());
  }

  getSideBarState(): boolean {
    return this.sidebarGlobalService.getSidebarState();
  }


  // Permet de recuperer le service
  toggle(currentMenu: any): void {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu: any): 'up' | 'down' {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }


  // logout session
  logout(): void {
    this.auth.logout(this.user);
    if(this.size){
      this.toggleSidebar()
    } else {
      this.toggleSidebar()
      document.querySelector('#bodySidebar').setAttribute('style', 'visibility:hidden');
    }
    //this.router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});
  }


  ngAfterViewInit(): void {
    window.addEventListener('DOMContentLoaded',() => {
      window.addEventListener('resize',this.resizeWindow);
      this.resizeWindow();
    });
  }

resizeWindow(){ 
      this.newWidth = window.innerWidth;
      if(this.newWidth > 1000){
        this.size = false
      } else {
        this.size = true
      }
  }




}
