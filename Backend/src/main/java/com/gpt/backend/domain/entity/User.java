package com.gpt.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Getter
@Setter
public class User {
    @Id
    @Column(nullable = false)
    private String email;

    
// 양방향용    
//    @OneToMany(mappedBy = "user")
//    private List<Title> titles;

//    @Column(name = "refresh_token")
//    private String refreshToken;
}
