import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BorrowingTransaction } from 'src/app/models/borrowingTransactionModel/borrowing-transaction';
import { BorrowerService } from 'src/app/services/BorrowerService/borrower.service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.scss'],
})
export class BorrowBookComponent {
  constructor(private borrowerService: BorrowerService) {}

  msg = '';
  errormsg = '';

  borrowingTransaction: BorrowingTransaction = new BorrowingTransaction();

  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     this.borrowerService.borrowBook(this.borrowingTransaction).subscribe(
  //       (response) => {
  //         console.log('Book borrowed successfully:', response);
  //         this.msg = 'Book Borrowed Successfully';
  //         form.reset();
  //       },
  //       (error) => {
  //         console.error('Error borrowing book:', error);
  //         this.msg = 'Error borrowing book: ' + error.message;
  //       }
  //     );
  //   }
  // }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.borrowerService.borrowBook(this.borrowingTransaction).subscribe(
        (response) => {
          console.log('Book borrowed successfully:', response);
          this.errormsg = '';
          this.msg = 'Book Borrowed Successfully';
          form.reset();
        },
        (error) => {
          console.error('Error borrowing book:', error);
          const errorText = error && error.text ? error.text : 'Unknown error';
          if (errorText == 'Success') {
            this.errormsg = '';
            this.msg = 'Book Borrowed Successfully';
          } else {
            this.msg = '';
            this.errormsg = errorText;
          }
        }
      );
    }
  }
}
