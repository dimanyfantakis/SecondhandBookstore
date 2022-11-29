package com.github.dimanyfantakis.SecondhandBookstore.book;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "api/v1/books")
@AllArgsConstructor
public class BookController {

    private BookService bookService;
    private final Mapper mapper;

    @GetMapping
    public List<BookAppUserDTO> getBooks() {
        return bookService.getBooks().stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    @GetMapping(path = "{bookId}")
    public BookAppUserDTO getBook(@PathVariable("bookId") Long bookId) {
        return mapper.toDTO(bookService.getBook(bookId));
    }
}
