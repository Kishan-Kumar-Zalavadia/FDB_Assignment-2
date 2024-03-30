package com.fdb.backend.Controllers;

import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Services.BorrowingTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
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


//    @PostMapping("/borrow/{userId}/{bookIsbn}")
//    public ResponseEntity<?> addBorrowingTransaction(
//            @PathVariable Long userId,
//            @PathVariable Long bookIsbn,
//            @RequestBody BorrowingTransaction borrowingTransaction
//    ) {
//        try {
//            BorrowingTransaction addedTransaction = borrowingTransactionService.addBorrowingTransaction(userId, bookIsbn, borrowingTransaction);
//            return new ResponseEntity<>(addedTransaction, HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//        }
//    }

//    @PostMapping("/addBorrowingTransaction")
//    public ResponseEntity<?> addBorrowingTransaction(@RequestBody BorrowingTransaction borrowingTransaction) {
//        return borrowingTransactionService.addBorrowingTransaction(borrowingTransaction);
//    }

    @PostMapping("/addBorrowingTransaction")
    public ResponseEntity<?> addBorrowingTransaction(@RequestBody BorrowingTransaction borrowingTransaction) {
        return borrowingTransactionService.addBorrowingTransaction(borrowingTransaction);
    }

    @PutMapping("/return")
    public ResponseEntity<?> returnBook(@RequestBody BorrowingTransaction borrowingTransaction) {
        try {
            borrowingTransactionService.returnBook(borrowingTransaction);
            return ResponseEntity.ok("Book returned successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/user/{userId}")
    public List<BorrowingTransaction> getBorrowingHistoryByUserId(@PathVariable Long userId) {
        return borrowingTransactionService.getBorrowingHistoryByUserId(userId);
    }

    @GetMapping("/user/name/{userName}")
    public List<BorrowingTransaction> getBorrowingHistoryByUserName(@PathVariable String userName) {
        return borrowingTransactionService.getBorrowingHistoryByUserName(userName);
    }

    @GetMapping("/user/email/{email}")
    public List<BorrowingTransaction> getBorrowingHistoryByEmail(@PathVariable String email) {
        return borrowingTransactionService.getBorrowingHistoryByEmail(email);
    }

    @GetMapping("/user/contact/{contactNumber}")
    public List<BorrowingTransaction> getBorrowingHistoryByContactNumber(@PathVariable String contactNumber) {
        return borrowingTransactionService.getBorrowingHistoryByContactNumber(contactNumber);
    }
}