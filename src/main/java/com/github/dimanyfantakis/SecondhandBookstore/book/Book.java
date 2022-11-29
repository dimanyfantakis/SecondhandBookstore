package com.github.dimanyfantakis.SecondhandBookstore.book;

import com.github.dimanyfantakis.SecondhandBookstore.auth.AppUser;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "Books")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Book {

    @Id
    @SequenceGenerator(name = "book_sequence", sequenceName = "book_sequence", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "book_sequence")
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column()
    private String author;
    private String description;
    private String genre;
    @Column(columnDefinition = "DECIMAL(5,2)", nullable = false)
    private double price;
    @Column(name = "image_url")
    private String image;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "AppUsers_app_user_id", referencedColumnName = "app_user_id", updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private AppUser appUser;

    public Book(String title, String author, String description, String genre, double price, String image) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.genre = genre;
        this.price = price;
        this.image = image;
    }

}
