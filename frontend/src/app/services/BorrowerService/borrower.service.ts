import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/userModel/user';

@Injectable({
  providedIn: 'root',
})
export class BorrowerService {
  constructor(private _http: HttpClient) {}

  public addBorrowerFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:9292/users/register', user);
  }
}