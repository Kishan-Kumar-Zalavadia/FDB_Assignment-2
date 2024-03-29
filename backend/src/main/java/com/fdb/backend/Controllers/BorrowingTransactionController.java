package com.fdb.backend.Controllers;

import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Services.BorrowingTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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

    // Other CRUD endpoints as needed
}