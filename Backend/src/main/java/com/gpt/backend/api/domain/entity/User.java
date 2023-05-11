package com.gpt.backend.api.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false)
    private String email;

    
// 양방향용    
//    @OneToMany(mappedBy = "user")
//    private List<Title> titles;

    @Column
    private String nickname;

    @Column(name = "refresh_token")
    private String refreshToken;
}
