package com.fdb.backend.Repositories;

import com.fdb.backend.Entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    // You can add custom query methods if needed

    List<Book> findByIsbn(Long isbn);

    List<Book> findByTitleContainingIgnoreCase(String title);

    List<Book> findByAuthorContainingIgnoreCase(String author);

    List<Book> findByGenreContainingIgnoreCase(String genre);

    List<Book> findByPublicationYear(Integer publicationYear);

}