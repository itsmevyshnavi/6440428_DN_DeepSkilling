package com.example;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBookDetails() {
        System.out.println("BookService: Getting book info...");
        bookRepository.printBookInfo();
    }
}
