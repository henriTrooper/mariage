import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { User } from './models/user';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private authorization = { headers: { Authorization: `Bearer ${localStorage.getItem('auth_tkn')}` } }

  constructor(private http: HttpClient) { }

  user = {};

  public newClient(userConnect: any): Observable<any> {
    console.log('eeee', userConnect)
    return this.http.post<any>(`${environment.apiUrl}/register`, { userConnect } , this.authorization)
    .pipe(
      map(newUser => {
        this.user = newUser.profil
        return  this.user
      }),
    )

  }

  /**
   * POST d'un User
   */
  addUser(user): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/addUser`, user, this.authorization)
      .pipe(
        map((newUser: User) => {
          return newUser;
        })
      );
  }

  /**
  * Get d'un User
  */
 getData(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users`, this.authorization)
      .pipe(
        map((data) => {
          return data;
        }),
      );
  }

  
  updateData(data):Observable<any>{
    const _id = data._id
    return this.http.put<any>(`${environment.apiUrl}/user/id/${_id}`, {data}, this.authorization)
    .pipe(
      map((data) => {
        return data;
      }),
    );
}

}
