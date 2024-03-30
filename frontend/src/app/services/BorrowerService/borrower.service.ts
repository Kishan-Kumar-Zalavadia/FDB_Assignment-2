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

  // borrowBook(
  //   borrowingTransaction: BorrowingTransaction
  // ): Observable<String> {
  //   return this._http.post<String>(
  //     `${this.apiUrl}/borrowing-transactions/borrowBook`,
  //     borrowingTransaction
  //   );
  // }

  borrowBook(borrowingTransaction: BorrowingTransaction): Observable<any> {
    return this._http
      .post<any>(
        `${this.apiUrl}/borrowing-transactions/borrowBook`,
        borrowingTransaction
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(error.error); // Return the error object
  }
}
