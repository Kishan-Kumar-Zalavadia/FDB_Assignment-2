import { Component } from '@angular/core';
import { Book } from 'src/app/models/bookModel/book';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  books: Book[] = [];

  searchQuery: string = '';
  searchResults: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
        this.searchResults = books;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  searchByIsbn(): void {
    this.searchResults = [];
    this.bookService
      .searchBooksByIsbn(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByTitle(): void {
    this.searchResults = [];
    this.bookService
      .searchBooksByTitle(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByAuthor(): void {
    this.searchResults = [];
    this.bookService
      .searchBooksByAuthor(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByGenre(): void {
    this.searchResults = [];
    this.bookService
      .searchBooksByGenre(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByPublicationYear(): void {
    this.searchResults = [];
    const year = parseInt(this.searchQuery);
    if (!isNaN(year)) {
      this.bookService
        .searchBooksByPublicationYear(year)
        .subscribe((result) => (this.searchResults = result));
    } else {
      console.error('Invalid publication year');
    }
  }

  clearSearch() {
    this.searchResults = this.books;
  }
}
