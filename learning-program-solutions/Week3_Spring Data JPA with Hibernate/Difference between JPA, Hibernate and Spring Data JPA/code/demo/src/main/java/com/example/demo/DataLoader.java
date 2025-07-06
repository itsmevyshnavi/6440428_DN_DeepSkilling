package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final BookRepository repository;

    public DataLoader(BookRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        repository.save(new Book("Spring in Action", "Craig Walls"));
        repository.save(new Book("Java Concurrency", "Brian Goetz"));

        System.out.println("Books in DB:");
        repository.findAll().forEach(System.out::println);
    }
}
