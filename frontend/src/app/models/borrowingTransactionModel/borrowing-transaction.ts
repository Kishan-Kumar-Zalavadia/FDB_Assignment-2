import { Book } from "../bookModel/book";
import { User } from "../userModel/user";

export class BorrowingTransaction {
  id!: number;
  // borrowerId!: number;
  // bookIsbn!: number;
  borrowingDate!: Date;
  returnDate: Date | null = null;
  user!: User;
  book!: Book;
}
