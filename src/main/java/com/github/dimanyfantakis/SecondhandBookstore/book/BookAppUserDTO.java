package com.github.dimanyfantakis.SecondhandBookstore.book;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class BookAppUserDTO {

    private Long id;
    private String title;
    private String author;
    private String description;
    private double price;
    private String image;
    private String appUsername;

}