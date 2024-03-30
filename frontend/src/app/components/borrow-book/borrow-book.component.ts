import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/bookModel/book';
import { BorrowingTransaction } from 'src/app/models/borrowingTransactionModel/borrowing-transaction';
import { User } from 'src/app/models/userModel/user';
import { BorrowerService } from 'src/app/services/BorrowerService/borrower.service';
import { BookService } from 'src/app/services/bookService/book.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.scss'],
})
export class BorrowBookComponent {
  constructor(
    private borrowerService: BorrowerService,
    private userService: UserService,
    private bookService: BookService
  ) {}

  msg = '';
  errormsg = '';

  borrowingTransaction = new BorrowingTransaction();
  borrower = new User();
  borrowingBook = new Book();

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.userService.getUserByIDFromRemote(form.value.borrowerId).subscribe(
        (response) => {
          this.errormsg = '';
          // console.log(response);
          this.borrower = response;
        },
        (error) => {
          console.log(error);
          this.errormsg = 'User not found';
        }
      );

      this.bookService.getBookById(form.value.bookIsbn).subscribe(
        (response) => {
          if (response.available == false) {
            this.errormsg = 'Book not available';
          } else {
            this.errormsg = '';
            this.borrowingBook = response;
            this.borrowingTransaction.borrower = this.borrower;
            this.borrowingTransaction.book = this.borrowingBook;
            this.borrowingTransaction.borrowingDate = form.value.borrowingDate;
            console.log(JSON.stringify(this.borrowingTransaction));
            this.borrowBook(this.borrowingTransaction);
            this.msg = 'Book assigned';
            // console.log(response);
          }
        },
        (error) => {
          console.log(error);
          this.errormsg = 'Book not found';
        }
      );
    }
  }



  borrowBook(borrowingTransaction: BorrowingTransaction) {
    this.borrowerService
      .addBorrowingTransaction(borrowingTransaction)
      .subscribe(
        (response) => {
          console.log('Book Borrowed');
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
