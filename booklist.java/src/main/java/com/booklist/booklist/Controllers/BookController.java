package com.booklist.booklist.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.booklist.booklist.Entities.Book;
import com.booklist.booklist.Repositories.BookRepository;

//Controller to define endpoints

@Controller
@RequestMapping(path="/api/book")
public class BookController {
    private final BookRepository bookRepository;
    
    //Dependency Injection
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PutMapping(path="/add", consumes = "application/json", produces = "application/json")
    public @ResponseBody Book addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @GetMapping(path="/getall")
    public @ResponseBody Iterable<Book> findAll() {
        return bookRepository.findAll();
    }

    @DeleteMapping(path="/delete/{id}")
    public @ResponseBody void deleteBook(@PathVariable("id") Integer id) {
        bookRepository.deleteById(id);
    }
}