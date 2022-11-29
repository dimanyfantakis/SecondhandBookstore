package com.github.dimanyfantakis.SecondhandBookstore.registration;

import com.github.dimanyfantakis.SecondhandBookstore.auth.AppUser;
import com.github.dimanyfantakis.SecondhandBookstore.auth.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import static com.github.dimanyfantakis.SecondhandBookstore.security.UserRole.MEMBER;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UsernameValidator usernameValidator;
    private final AppUserService appUserService;

    public void register(RegistrationRequest request) {
        boolean isUsernameValid = usernameValidator.validate(request.getUsername());

        if (!isUsernameValid) {
            throw new IllegalStateException("username is invalid");
        }

        appUserService.registerUser(new AppUser(request.getUsername(), request.getPassword(), true,
                true, true, true, MEMBER.getGrantedAuthorities()));

    }
}
