package com.booklist.booklist;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.booklist.booklist.Entities.Book;
import com.booklist.booklist.Repositories.BookRepository;

//Initializer to populate the database when it's (re)created

@Component
public class DataLoader implements ApplicationRunner {

    private final BookRepository bookRepository;

    public DataLoader(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void run(ApplicationArguments args) {
        
        List<Book> booksToBeAdded = new ArrayList<Book>();
        
        booksToBeAdded.add(new Book("Mistborn", "Brandon Sanderson", "https://m.media-amazon.com/images/I/81dM5-PSE3L._AC_UF894,1000_QL80_.jpg", "Read"));
        booksToBeAdded.add(new Book("Outlander", "Diana Gabaldon", "https://m.media-amazon.com/images/I/81TlHXl+gaL._AC_UF894,1000_QL80_.jpg", "To Be Read"));
        booksToBeAdded.add(new Book("Elantris", "Brandon Sanderson", "https://m.media-amazon.com/images/I/81S+HqepWwL._AC_UF894,1000_QL80_.jpg", "Reading"));
        booksToBeAdded.add(new Book("The Name of the Wind", "Patrick Rothfuss", "https://m.media-amazon.com/images/I/611iKJa7a-L._AC_UF894,1000_QL80_.jpg", "Read"));
        booksToBeAdded.add(new Book("The Wise Man's Fear", "Patrick Rothfuss", "https://m.media-amazon.com/images/I/81tbBNvLFKL._AC_UF894,1000_QL80_.jpg", "To Be Read"));

        for (Book book : booksToBeAdded) {
            List<Book> existingBook = bookRepository.findByTitleAndAuthorAndCategory(book.getTitle(), book.getAuthor(), book.getCategory());
            if (existingBook.isEmpty()) {
                bookRepository.save(book);
            }
        }
    }
}
