package com.fdb.backend.Repositories;


import com.fdb.backend.Entities.BorrowingTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BorrowingTransactionRepository extends JpaRepository<BorrowingTransaction, Long> {
    // You can add custom query methods if needed
}