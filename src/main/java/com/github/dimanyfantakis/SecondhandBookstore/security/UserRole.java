package com.github.dimanyfantakis.SecondhandBookstore.security;

import com.google.common.collect.Sets;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.github.dimanyfantakis.SecondhandBookstore.security.UserPermission.*;

@AllArgsConstructor
@Getter
public enum UserRole {
    VISITOR(Sets.newHashSet(BOOK_READ)),
    MEMBER(Sets.newHashSet(BOOK_READ, BOOK_WRITE)),
    ADMIN(Sets.newHashSet(USER_READ, USER_WRITE, BOOK_READ, BOOK_WRITE));

    private final Set<UserPermission> permissions;

    public Set<SimpleGrantedAuthority> getGrantedAuthorities() {
        //add authorities
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream().map(permission ->
                new SimpleGrantedAuthority(permission.getPermission())).collect(Collectors.toSet());
        //add role
        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));

        return permissions;
    }
}
