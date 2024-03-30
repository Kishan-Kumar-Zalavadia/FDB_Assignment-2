import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
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

  // addBorrowingTransaction(
  //   transaction: BorrowingTransaction
  // ): Observable<any> {
  //   return this._http.post<BorrowingTransaction>(
  //     `${this.apiUrl}/borrowing-transactions/addBorrowingTransaction`,
  //     transaction
  //   );
  // }

  addBorrowingTransaction(
    borrowingTransaction: BorrowingTransaction
  ): Observable<any> {
    console.log('From service: '+ JSON.stringify(borrowingTransaction));
    return this._http.post<any>(
      `${this.apiUrl}/borrowing-transactions/addBorrowingTransaction`,
      borrowingTransaction
    );
  }
}
