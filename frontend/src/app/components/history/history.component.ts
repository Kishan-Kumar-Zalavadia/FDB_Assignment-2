import { Component } from '@angular/core';
import { Book } from 'src/app/models/bookModel/book';
import { BorrowingTransaction } from 'src/app/models/borrowingTransactionModel/borrowing-transaction';
import { User } from 'src/app/models/userModel/user';
import { BorrowerService } from 'src/app/services/BorrowerService/borrower.service';
import { BookService } from 'src/app/services/bookService/book.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  borrowingHistory: BorrowingTransaction[] = [];

  constructor(private borrowingService: BorrowerService, private userService: UserService, private bookService: BookService) {}

  ngOnInit(): void {}

  searchType: string = 'userId';
  searchValue!: string;

  searchBorrowingHistory(): void {
    if (this.searchType === 'userId') {
      this.borrowingHistory = [];
      this.borrowingService
        .getBorrowingHistoryByUserId(+this.searchValue)
        .subscribe((history) => {
          this.borrowingHistory = history;
        });
    } else if (this.searchType === 'userName') {
      this.borrowingHistory = [];
      this.borrowingService
        .getBorrowingHistoryByUserName(this.searchValue)
        .subscribe((history) => {
          this.borrowingHistory = history;
        });
    } else if (this.searchType === 'email') {
      this.borrowingHistory = [];
      this.borrowingService
        .getBorrowingHistoryByEmail(this.searchValue)
        .subscribe((history) => {
          this.borrowingHistory = history;
        });
    } else if (this.searchType === 'contactNumber') {
      this.borrowingHistory = [];
      this.borrowingService
        .getBorrowingHistoryByContactNumber(this.searchValue)
        .subscribe((history) => {
          this.borrowingHistory = history;
        });
    }
  }

  viewUser(userId: number): void {
    this.userService.getUserByIDFromRemote(userId).subscribe(
      (user: User) => {
        alert(
          `User ID: ${user.userID}\nEmail: ${user.emailID}\nName: ${
            user.userName
          }\nContact Number: ${user.contactNumber}\nAdmin: ${
            user.admin ? 'Yes' : 'No'
          }`
        );
      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  viewBook(isbn: number): void {
    this.bookService.getBookById(isbn).subscribe(
      (book: Book) => {
        alert(
          `ISBN: ${book.isbn}\nTitle: ${book.title}\nAuthor: ${
            book.author
          }\nGenre: ${book.genre}\nPublication Year: ${
            book.publicationYear
          }\nAvailable: ${book.available ? 'Yes' : 'No'}`
        );
      },
      (error) => {
        console.error('Error fetching book:', error);
      }
    );
  }
}
