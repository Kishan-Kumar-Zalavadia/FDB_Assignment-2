import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/bookModel/book';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  constructor(private bookService: BookService) {}
  msg = '';
  errormsg = '';

  newBook = new Book();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.bookService.addBook(this.newBook).subscribe(
        (response) => {
          console.log('Book added successfully:', response);
          this.errormsg = '';
          this.msg = 'Book Added Successfully';
          // form.reset();
        },
        (error) => {
          console.error('Error adding book:', error);
          if (
            error.error ===
            'Book with ISBN ' + this.newBook.isbn + ' already exists'
          ) {
            this.msg = '';
            this.errormsg = 'Book already exists';
          } else {
            this.msg = '';
            this.errormsg = 'Error adding book: ' + error.message;
          }
        }
      );
    }
  }
}
