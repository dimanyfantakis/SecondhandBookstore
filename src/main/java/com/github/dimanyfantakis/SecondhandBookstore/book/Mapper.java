package com.github.dimanyfantakis.SecondhandBookstore.book;

import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public BookAppUserDTO toDTO(Book book) {
        return new BookAppUserDTO(book.getId(), book.getTitle(), book.getAuthor(), book.getDescription(), book.getPrice(),
                book.getImage(), book.getAppUser().getUsername());
    }
}
