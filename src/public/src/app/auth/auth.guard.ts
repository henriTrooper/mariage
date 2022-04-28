/* That means, if the user is not logged in and tries to access a specific route, then it will redirect back to /auth/login.
Another scenario is that, if the user is logged in and tries to access the/auth/register or /auth/login page,
 then it will be redirected to the home page and can’t access these routes because he is already logged in. */

 /*So, basically what I have done is that first, it will check if the user is logged in or not using isAuthenticated() method.
  If it is logged in, then it will return the authState() function.
  That function then will check if the user is trying to access the /auth/register or /auth/login page.
 If it does, then we will redirect to the home page; otherwise, it will continue.
  If the user is not logged in, then it will return the noAuthState() function. In which, we will be redirected to /auth/login page.
  So, this guard will act as middleware, and if we want to activate on a particular route, then we can do it where we have defined the routes. 
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url: string;
  constructor(private auth: AuthService, private router: Router) { }

  private authState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  private notAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
  private isLoginOrRegister(): boolean {
    if (this.url.includes('/auth/login') || this.url.includes('/auth/register')) {
      return true;
    }
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.url = state.url;
    if (this.auth.isAuthenticated()) {
     return this.authState();
    }
    return this.notAuthState();
  }
}