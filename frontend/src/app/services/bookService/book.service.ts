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

  getBookById(isbn: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${isbn}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/addBook`, book);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}`);
  }

  searchBooksByIsbn(isbn: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search/isbn/${isbn}`);
  }

  searchBooksByTitle(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search/title/${title}`);
  }

  searchBooksByAuthor(author: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search/author/${author}`);
  }

  searchBooksByGenre(genre: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search/genre/${genre}`);
  }

  searchBooksByPublicationYear(publicationYear: number): Observable<Book[]> {
    return this.http.get<Book[]>(
      `${this.apiUrl}/search/publicationYear/${publicationYear}`
    );
  }
}
