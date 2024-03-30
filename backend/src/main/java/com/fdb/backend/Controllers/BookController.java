package com.fdb.backend.Controllers;

import com.fdb.backend.Entities.Book;
import com.fdb.backend.Repositories.BookRepository;
import com.fdb.backend.Services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        Book book = bookService.getBookById(id);
        if (book == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
        return book;
    }
    @PostMapping("/addBook")
    public ResponseEntity<?> addBook(@RequestBody Book book) {
        // Check if the book already exists
        if (bookRepository.existsById(book.getIsbn())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Book with ISBN " + book.getIsbn() + " already exists");
        } else {
            // Book doesn't exist, add it
            Book addedBook = bookService.addBook(book);
            return ResponseEntity.status(HttpStatus.CREATED).body(addedBook);
        }
    }

    @GetMapping("/search/isbn/{isbn}")
    public List<Book> searchBooksByIsbn(@PathVariable Long isbn) {
        return bookService.searchBooksByIsbn(isbn);
    }

    @GetMapping("/search/title/{title}")
    public List<Book> searchBooksByTitle(@PathVariable String title) {
        return bookService.searchBooksByTitle(title);
    }

    @GetMapping("/search/author/{author}")
    public List<Book> searchBooksByAuthor(@PathVariable String author) {
        return bookService.searchBooksByAuthor(author);
    }

    @GetMapping("/search/genre/{genre}")
    public List<Book> searchBooksByGenre(@PathVariable String genre) {
        return bookService.searchBooksByGenre(genre);
    }

    @GetMapping("/search/publicationYear/{publicationYear}")
    public List<Book> searchBooksByPublicationYear(@PathVariable Integer publicationYear) {
        return bookService.searchBooksByPublicationYear(publicationYear);
    }


}