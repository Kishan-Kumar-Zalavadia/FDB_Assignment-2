import { Component } from '@angular/core';
import { Book } from 'src/app/models/bookModel/book';
import { BorrowingTransaction } from 'src/app/models/borrowingTransactionModel/borrowing-transaction';
import { User } from 'src/app/models/userModel/user';
import { BorrowerService } from 'src/app/services/BorrowerService/borrower.service';
import { BookService } from 'src/app/services/bookService/book.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  // returnBook(arg0: number) {
  //   throw new Error('Method not implemented.');
  // }
  transactions: BorrowingTransaction[] = [];
  seeUser = new User();
  seeBook = new Book();

  constructor(
    private transactionService: BorrowerService,
    private userService: UserService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe(
      (transactions: BorrowingTransaction[]) => {
        this.transactions = transactions;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  viewUser(userId: number): void {
    this.userService.getUserByIDFromRemote(userId).subscribe(
      (user: User) => {
        // alert(
        //   `User ID: ${user.userID}\nEmail: ${user.emailID}\nName: ${
        //     user.userName
        //   }\nContact Number: ${user.contactNumber}\nAdmin: ${
        //     user.admin ? 'Yes' : 'No'
        //   }`
        // );
        this.seeUser = user;
        this.openUserPopup();
      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  viewBook(isbn: number): void {
    this.bookService.getBookById(isbn).subscribe(
      (book: Book) => {
        //   alert(
        //     `ISBN: ${book.isbn}\nTitle: ${book.title}\nAuthor: ${
        //       book.author
        //     }\nGenre: ${book.genre}\nPublication Year: ${
        //       book.publicationYear
        //     }\nAvailable: ${book.available ? 'Yes' : 'No'}`
        //   );
        this.seeBook = book;
        this.openBookPopup();
      },
      (error) => {
        console.error('Error fetching book:', error);
      }
    );
  }

  // * Pop up

  showUserPopup: boolean = false;

  openUserPopup() {
    this.showUserPopup = true;
  }

  closeUserPopup() {
    this.showUserPopup = false;
  }

  showBookPopup: boolean = false;

  openBookPopup() {
    this.showBookPopup = true;
  }

  closeBookPopup() {
    this.showBookPopup = false;
  }

  selectedDate!: Date;

  returnBook(selectedDate: Date, borrowingTransaction: BorrowingTransaction) {
    borrowingTransaction.returnDate = this.selectedDate;
    console.log('Transaction: ' + JSON.stringify(borrowingTransaction));
    this.transactionService.returnBook(borrowingTransaction).subscribe(
      () => console.log('Book returned successfully'),
      (error) => console.error('Error returning book:', error)
    );
  }

  showSelectedDate() {
    if (this.selectedDate) {
      alert(`Selected date: ${this.selectedDate}`);
    } else {
      alert('No date selected');
    }
  }
}
