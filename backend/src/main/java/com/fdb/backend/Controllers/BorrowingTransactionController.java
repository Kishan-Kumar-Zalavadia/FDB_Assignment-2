package com.fdb.backend.Controllers;

import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Services.BorrowingTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/borrowing-transactions")
public class BorrowingTransactionController {

    @Autowired
    private BorrowingTransactionService borrowingTransactionService;

    @GetMapping
    public List<BorrowingTransaction> getAllBorrowingTransactions() {
        return borrowingTransactionService.getAllBorrowingTransactions();
    }

    @GetMapping("/{id}")
    public BorrowingTransaction getBorrowingTransactionById(@PathVariable Long id) {
        return borrowingTransactionService.getBorrowingTransactionById(id);
    }


    @PostMapping("/borrowBook")
    public ResponseEntity<?> addBorrowingTransaction(@RequestBody BorrowingTransaction borrowingTransaction) {
        System.out.println("INPUT: "+ borrowingTransaction.getUser().getUserID());
        System.out.println("INPUT: "+ borrowingTransaction.getBook().getIsbn());
        return borrowingTransactionService.addBorrowingTransaction(borrowingTransaction);
    }
}