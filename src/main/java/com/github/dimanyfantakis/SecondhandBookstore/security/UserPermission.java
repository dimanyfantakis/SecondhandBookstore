package com.github.dimanyfantakis.SecondhandBookstore.security;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UserPermission {

    BOOK_READ("book:read"),
    BOOK_WRITE("book:write"),
    USER_READ("user:read"),
    USER_WRITE("user:write");

    private final String permission;

}
