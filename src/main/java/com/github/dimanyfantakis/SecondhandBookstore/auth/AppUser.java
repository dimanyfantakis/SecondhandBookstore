package com.github.dimanyfantakis.SecondhandBookstore.auth;

import com.github.dimanyfantakis.SecondhandBookstore.book.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "AppUsers")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AppUser implements UserDetails {

    @Id
    @SequenceGenerator(name = "app_user_sequence", sequenceName = "app_user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "app_user_sequence")
    @Column(name = "app_user_id")
    private Long id;
    @OneToMany(targetEntity = Book.class, mappedBy = "appUser", cascade=CascadeType.ALL, orphanRemoval=true, fetch = FetchType.EAGER)
    private List<Book> books;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
    private Boolean isAccountNonExpired = true;
    private Boolean isAccountNonLocked = true;
    private Boolean isCredentialsNonExpired = true;
    private Boolean isEnabled = true;
    @Transient
    private Set<? extends GrantedAuthority> grantedAuthorities;

    public AppUser(String username, String password, Boolean isAccountNonExpired, Boolean isAccountNonLocked,
                   Boolean isCredentialsNonExpired, Boolean isEnabled, Set<? extends GrantedAuthority> grantedAuthorities) {
        this.username = username;
        this.password = password;
        this.isAccountNonExpired = isAccountNonExpired;
        this.isAccountNonLocked = isAccountNonLocked;
        this.isCredentialsNonExpired = isCredentialsNonExpired;
        this.isEnabled = isEnabled;
        this.grantedAuthorities = grantedAuthorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }
}
