package com.fdb.backend.Services;

import com.fdb.backend.Entities.Book;
import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Entities.User;
import com.fdb.backend.Repositories.BorrowingTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BorrowingTransactionService {

    @Autowired
    private BorrowingTransactionRepository borrowingTransactionRepository;

    @Autowired
    private BookService bookService;

    @Autowired
    private UserService userService;

    public List<BorrowingTransaction> getAllBorrowingTransactions() {
        return borrowingTransactionRepository.findAll();
    }

    public BorrowingTransaction getBorrowingTransactionById(Long id) {
        return borrowingTransactionRepository.findById(id).orElse(null);
    }

    public String borrowBook(BorrowingTransaction borrowingTransaction) {
        // Check if borrowerId exists in User table
        Optional<User> borrower = userService.getUserById(borrowingTransaction.getBorrowerId());
        if (!borrower.isPresent()) {
            return "Borrower not found";
        }

        // Check if bookIsbn exists in Book table
        Book borrowedBook = bookService.getBookById(borrowingTransaction.getBookIsbn());
        if (borrowedBook == null) {
            return "Book not found";
        }

        // Check if the book is available
        if (!borrowedBook.isAvailable()) {
            return "Book is not available";
        }

        // Set borrowing date to current date
        borrowingTransaction.setBorrowingDate(LocalDate.now());

        // Update book availability status
        borrowedBook.setAvailable(false);
        bookService.updateBook(borrowedBook);
        

//        return borrowingTransactionRepository.save(borrowingTransaction);
        return "Success";
    }



}