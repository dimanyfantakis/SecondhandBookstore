package com.github.dimanyfantakis.SecondhandBookstore.book;

import com.github.dimanyfantakis.SecondhandBookstore.auth.AppUser;
import com.github.dimanyfantakis.SecondhandBookstore.auth.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BookService {

    private final static String BOOK_NOT_FOUND_MESSAGE = "Book with id %s, not found";
    private final static String USERS_BOOKS_NOT_FOUND_MESSAGE = "User: %s has no books";

    private final BookRepository bookRepository;
    private final AppUserRepository appUserRepository;

    public Book getBook(Long bookId) {
        return bookRepository.findById(bookId).orElseThrow(() ->
                new UsernameNotFoundException(String.format(BOOK_NOT_FOUND_MESSAGE, bookId)));
    }

    public List<Book> getBooks() { return bookRepository.findAll(); }

    public List<Book> getUsersBook(String appUsername) {
        AppUser appUser = appUserRepository.findByUsername(appUsername).orElseThrow(() ->
                new IllegalStateException("User : " + appUsername + " not found"));

        return bookRepository.findByAppUser(appUser).orElseThrow(() ->
                new UsernameNotFoundException(String.format(USERS_BOOKS_NOT_FOUND_MESSAGE, appUsername)));
    }

    @Transactional
    public void addBook(Book book, String appUsername) {
        Optional<Book> bookOptional = bookRepository.findByTitle(book.getTitle());

        if (bookOptional.isPresent()) {
            throw new IllegalStateException("Book already in bookstore");
        }

        AppUser appUser = appUserRepository.findByUsername(appUsername).orElseThrow(() ->
                new IllegalStateException("User : " + appUsername + " not found"));

        book.setAppUser(appUser);
        bookRepository.save(book);
    }

    @Transactional
    public void deleteBook(Long bookId) {
        boolean bookExists = bookRepository.existsById(bookId);
        if (!bookExists) {
            throw new IllegalStateException("Book doesn't exist");
        }

        bookRepository.deleteById(bookId);
    }
}
