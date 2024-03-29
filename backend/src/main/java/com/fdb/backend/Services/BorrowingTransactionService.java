package com.fdb.backend.Services;

import com.fdb.backend.Entities.Book;
import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Repositories.BorrowingTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BorrowingTransactionService {

    @Autowired
    private BorrowingTransactionRepository borrowingTransactionRepository;

    @Autowired
    private BookService bookService;

    public List<BorrowingTransaction> getAllBorrowingTransactions() {
        return borrowingTransactionRepository.findAll();
    }

    public BorrowingTransaction getBorrowingTransactionById(Long id) {
        return borrowingTransactionRepository.findById(id).orElse(null);
    }


    public BorrowingTransaction borrowBook(BorrowingTransaction borrowingTransaction) {
        // Set borrowing date to current date
        borrowingTransaction.setBorrowingDate(LocalDate.now());

        // Update book availability status
        Book borrowedBook = bookService.getBookById(borrowingTransaction.getBookIsbn());
        if (borrowedBook != null) {
            borrowedBook.setAvailable(false);
            bookService.updateBook(borrowedBook);
        }

        return borrowingTransactionRepository.save(borrowingTransaction);
    }

}