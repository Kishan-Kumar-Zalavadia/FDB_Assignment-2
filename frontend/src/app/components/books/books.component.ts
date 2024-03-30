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
  selectedOption: string = 'isbn'; // Default selected option

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

  search(): void {
    this.searchResults = [];
    switch (this.selectedOption) {
      case 'isbn':
        this.searchByIsbn();
        break;
      case 'title':
        this.searchByTitle();
        break;
      case 'author':
        this.searchByAuthor();
        break;
      case 'genre':
        this.searchByGenre();
        break;
      case 'publicationYear':
        this.searchByPublicationYear();
        break;
      default:
        console.error('Invalid option');
        break;
    }
  }

  searchByIsbn(): void {
    this.bookService
      .searchBooksByIsbn(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByTitle(): void {
    this.bookService
      .searchBooksByTitle(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByAuthor(): void {
    this.bookService
      .searchBooksByAuthor(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByGenre(): void {
    this.bookService
      .searchBooksByGenre(this.searchQuery)
      .subscribe((result) => (this.searchResults = result));
  }

  searchByPublicationYear(): void {
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
