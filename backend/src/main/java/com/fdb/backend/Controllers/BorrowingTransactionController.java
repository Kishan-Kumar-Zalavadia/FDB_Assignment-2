package com.fdb.backend.Controllers;

import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Services.BorrowingTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String borrowBook(@RequestBody BorrowingTransaction borrowingTransaction) {
        return borrowingTransactionService.borrowBook(borrowingTransaction);
    }


}