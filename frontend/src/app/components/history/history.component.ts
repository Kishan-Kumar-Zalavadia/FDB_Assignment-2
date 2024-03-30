import { Component } from '@angular/core';
import { BorrowingTransaction } from 'src/app/models/borrowingTransactionModel/borrowing-transaction';
import { BorrowerService } from 'src/app/services/BorrowerService/borrower.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  userId!: number;
  borrowingHistory: BorrowingTransaction[] = [];

  constructor(private borrowingService: BorrowerService) {}

  ngOnInit(): void {}

  searchBorrowingHistory(): void {
    this.borrowingHistory = [];
    this.borrowingService
      .getBorrowingHistory(this.userId)
      .subscribe((history) => {
        this.borrowingHistory = history;
      });
  }
}
