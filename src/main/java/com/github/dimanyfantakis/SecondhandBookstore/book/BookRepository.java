package com.github.dimanyfantakis.SecondhandBookstore.book;

import com.github.dimanyfantakis.SecondhandBookstore.auth.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    Optional<Book> findByTitle(String bookTitle);

    Optional<List<Book>> findByAppUser(AppUser appUser);
}
