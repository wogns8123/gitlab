package com.gpt.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Table;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
//@Table(name = "user")
@Getter
@Setter
public class User {
    @Id
    @Column(nullable = false)
    private String email;
//    @Column(name = "refresh_token")
//    private String refreshToken;

    @OneToMany(mappedBy = "email")
    private Set<Title> titles;
}
