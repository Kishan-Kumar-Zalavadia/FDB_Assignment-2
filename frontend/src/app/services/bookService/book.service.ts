import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/bookModel/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:9292/books'; // Change this to match your backend URL

  constructor(private http: HttpClient) {}

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/addBook`, book);
  }
}
