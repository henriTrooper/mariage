
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { environment } from '@environments/environment';
import { SocialAuthService } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';



const jwt = new JwtHelperService();

class DecodedToken {
  exp: number;
  username: string;
}

interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authorization = { headers: { Authorization: `Bearer ${localStorage.getItem('auth_tkn')}` } }


  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private decodedToken;

  constructor(private http: HttpClient, private socialAuthService: SocialAuthService, private router: Router,) {
    this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')) || new DecodedToken();
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('auth_meta')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

 

  // Pour interceptors
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}

  public login(userConnect: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/login`, { userConnect })
    .pipe(map((token: TokenResponse) => {
       return this.saveToken(token.token);
    }));
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    this.currentUserSubject.next(token);
    return token;
  }

  public logout(pipo): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');
    this.decodedToken = new DecodedToken();
    this.currentUserSubject.next(null);
    if (pipo){
      this.socialAuthService.signOut();
    }
    this.router.navigate(['/']);
  }

/*Si l'utilisateur est connecté,
  nous afficherons un lien de déconnexion et un nom d'utilisateur dans la barre de navigation;
  sinon, nous afficherons le lien de connexion et d'enregistrement.*/
 public isAuthenticated(): boolean {
  return moment().isBefore(moment.unix(this.decodedToken.exp));
}

/* le nom d'utilisateur connecté, Le decodedToken a userId et username */
public getUsername(): string {
  return this.decodedToken.username;
}

public isAdmin(): boolean {
  const localToken = JSON.parse(localStorage.getItem('auth_meta'));
  const isAdmin = localToken.admin;
  return isAdmin;
}

public profilName() {
  const localToken = JSON.parse(localStorage.getItem('auth_meta'));
  const nom = localToken.nom;
  return nom;
}

}

