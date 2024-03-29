import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BorrowingTransaction } from 'src/app/models/borrowingTransactionModel/borrowing-transaction';
import { User } from 'src/app/models/userModel/user';

@Injectable({
  providedIn: 'root',
})
export class BorrowerService {
  constructor(private _http: HttpClient) {}

  private apiUrl = 'http://localhost:9292';


  public addBorrowerFromRemote(user: User): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/users/register`, user);
  }

  borrowBook(
    borrowingTransaction: BorrowingTransaction
  ): Observable<BorrowingTransaction> {
    return this._http.post<BorrowingTransaction>(
      `${this.apiUrl}/borrowing-transactions/borrowBook`,
      borrowingTransaction
    );
  }
}
