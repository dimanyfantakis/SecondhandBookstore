package com.github.dimanyfantakis.SecondhandBookstore.registration;

import org.springframework.stereotype.Service;

@Service
public class UsernameValidator {

    private final static String pattern= "^[a-zA-Z\\d]*$";
    public boolean validate(String username) {
        return username.matches(pattern);
    }
}
