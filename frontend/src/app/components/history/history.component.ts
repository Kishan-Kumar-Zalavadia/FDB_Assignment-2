import { Component } from '@angular/core';
import { BorrowingTransaction } from 'src/app/models/borrowingTransactionModel/borrowing-transaction';
import { BorrowerService } from 'src/app/services/BorrowerService/borrower.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  borrowingHistory: BorrowingTransaction[] = [];

  constructor(private borrowingService: BorrowerService) {}

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
}
