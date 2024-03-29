package com.fdb.backend.Services;

import com.fdb.backend.Entities.BorrowingTransaction;
import com.fdb.backend.Repositories.BorrowingTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowingTransactionService {

    @Autowired
    private BorrowingTransactionRepository borrowingTransactionRepository;

    public List<BorrowingTransaction> getAllBorrowingTransactions() {
        return borrowingTransactionRepository.findAll();
    }

    public BorrowingTransaction getBorrowingTransactionById(Long id) {
        return borrowingTransactionRepository.findById(id).orElse(null);
    }

    // Other service methods for CRUD operations and business logic
}