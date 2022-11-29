package com.github.dimanyfantakis.SecondhandBookstore.book;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "management/api/v1/books")
@AllArgsConstructor
@Slf4j
public class BookManagementController {

    private final BookService bookService;
    private final Mapper mapper;

    @PostMapping(path = "add")
    public void addBook(@RequestBody Book book, @RequestParam("appUsername") String appUsername) {
        bookService.addBook(book, appUsername);
    }

    @DeleteMapping(path = "{bookId}")
    public void deleteBook(@PathVariable("bookId") Long bookId) {
        bookService.deleteBook(bookId);
    }

    @GetMapping
    public List<BookAppUserDTO> getBooks(@RequestParam("appUsername") String appUsername) {
        return bookService.getUsersBook(appUsername).stream().map(mapper::toDTO).collect(Collectors.toList());
    }
}
