package com.fdb.backend.Repositories;


import com.fdb.backend.Entities.BorrowingTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowingTransactionRepository extends JpaRepository<BorrowingTransaction, Long> {
    List<BorrowingTransaction> findByUserUserID(Long userId);

    List<BorrowingTransaction> findByUserUserName(String userName);
g
    List<BorrowingTransaction> findByUserEmailID(String email);

    List<BorrowingTransaction> findByUserContactNumber(String contactNumber);
}