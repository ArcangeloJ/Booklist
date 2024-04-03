package com.booklist.booklist.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.booklist.booklist.Entities.Book;

//Repository for CRUD service, created automatically by Spring based on specifications given.
//The CRUD class has a generic type composed of the class and its primary key type.

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByTitleAndAuthorAndCategory(String title, String author, String category);
}
