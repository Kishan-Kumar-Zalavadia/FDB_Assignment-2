import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/userModel/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser = new User();

  setUser(user: User) {
    console.log('User set as: ' + user.userID);
    this.currentUser = user;
  }
  getUser() {
    return this.currentUser;
  }

  constructor(private _http: HttpClient) {}

  private usersUrl = 'http://localhost:9292/users';

  public getUserByIDFromRemote(userID: number): Observable<User> {
    const url = `${this.usersUrl}/${userID}`;
    return this._http.get<User>(url);
  }


}
