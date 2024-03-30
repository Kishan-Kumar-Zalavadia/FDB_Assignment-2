package com.fdb.backend.Services;

import com.fdb.backend.Entities.Book;
import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Entities.User;
import com.fdb.backend.Repositories.BorrowingTransactionRepository;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

//    public ResponseEntity<?> addBorrowingTransaction(BorrowingTransaction borrowingTransaction) {
//        // Check if the user exists
//        User user = userService.getUserById(borrowingTransaction.getUser().getUserID());
//        if (user == null) {
//            return new ResponseEntity<>("User with ID " + borrowingTransaction.getUser().getUserID() + " not found", HttpStatus.BAD_REQUEST);
//        }
//
//        // Check if the book exists
//        Book book = bookService.getBookById(borrowingTransaction.getBook().getIsbn());
//        if (book == null) {
//            return new ResponseEntity<>("Book with ISBN " + borrowingTransaction.getBook().getIsbn() + " not found", HttpStatus.BAD_REQUEST);
//        }
//
//        // Add any additional validation logic here
//
//        // Save the borrowing transaction
//        try {
//            book.setAvailable(false);
//            bookService.updateBook(book);
//            BorrowingTransaction addedTransaction = borrowingTransactionRepository.save(borrowingTransaction);
//
//            return new ResponseEntity<>(addedTransaction, HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    public ResponseEntity<?> addBorrowingTransaction(BorrowingTransaction borrowingTransaction) {
        // Check if the user exists
        User user = userService.getUserById(borrowingTransaction.getUser().getUserID());
        if (user == null) {
            return new ResponseEntity<>("User with ID " + borrowingTransaction.getUser().getUserID() + " not found", HttpStatus.BAD_REQUEST);
        }

        // Check if the book exists
        Book book = bookService.getBookById(borrowingTransaction.getBook().getIsbn());
        if (book == null) {
            return new ResponseEntity<>("Book with ISBN " + borrowingTransaction.getBook().getIsbn() + " not found", HttpStatus.BAD_REQUEST);
        }

        try {
            // Update book availability
            book.setAvailable(false);
            bookService.updateBook(book);

            // Save the borrowing transaction
            BorrowingTransaction addedTransaction = borrowingTransactionRepository.save(borrowingTransaction);

            return new ResponseEntity<>(addedTransaction, HttpStatus.CREATED);
        } catch (Exception e) {
            // Handle duplicate entry exception
            if (e.getCause() instanceof ConstraintViolationException) {
                return new ResponseEntity<>("Duplicate entry for borrowing transaction", HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }


    public BorrowingTransaction getBorrowingTransactionById(Long id) {
        return borrowingTransactionRepository.findById(id).orElse(null);

    }
}
