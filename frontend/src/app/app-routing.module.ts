import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBorrowerComponent } from './components/add-borrower/add-borrower.component';
import { BorrowBookComponent } from './components/borrow-book/borrow-book.component';
import { BooksComponent } from './components/books/books.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'addBook', component: AddBookComponent },
      { path: 'addBorrower', component: AddBorrowerComponent },
      { path: 'borrowBook', component: BorrowBookComponent },
      { path: 'books', component: BooksComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'history', component: HistoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
