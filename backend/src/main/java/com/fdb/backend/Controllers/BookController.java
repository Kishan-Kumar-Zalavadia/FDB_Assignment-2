package com.fdb.backend.Controllers;

import com.fdb.backend.Entities.Book;
import com.fdb.backend.Repositories.BookRepository;
import com.fdb.backend.Services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return bookService.getBookById(id);
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


}