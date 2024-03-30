import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBorrowerComponent } from './components/add-borrower/add-borrower.component';
import { BorrowBookComponent } from './components/borrow-book/borrow-book.component';
import { BooksComponent } from './components/books/books.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { HistoryComponent } from './components/history/history.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent,
    AddBorrowerComponent,
    BorrowBookComponent,
    BooksComponent,
    TransactionsComponent,
    HistoryComponent,
    LandingPageComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
