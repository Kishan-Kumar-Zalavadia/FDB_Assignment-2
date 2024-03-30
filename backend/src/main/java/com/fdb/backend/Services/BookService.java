package com.fdb.backend.Services;

import com.fdb.backend.Entities.Book;
import com.fdb.backend.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public void updateBook(Book book) {
        bookRepository.save(book);
    }

    public List<Book> searchBooksByIsbn(Long isbn) {
        // Implement search by ISBN logic using bookRepository
        return bookRepository.findByIsbn(isbn);
    }

    public List<Book> searchBooksByTitle(String title) {
        // Implement search by title logic using bookRepository
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }

    public List<Book> searchBooksByAuthor(String author) {
        // Implement search by author logic using bookRepository
        return bookRepository.findByAuthorContainingIgnoreCase(author);
    }

    public List<Book> searchBooksByGenre(String genre) {
        // Implement search by genre logic using bookRepository
        return bookRepository.findByGenreContainingIgnoreCase(genre);
    }

    public List<Book> searchBooksByPublicationYear(Integer publicationYear) {
        // Implement search by publication year logic using bookRepository
        return bookRepository.findByPublicationYear(publicationYear);
    }

}
