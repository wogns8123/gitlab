package com.gpt.backend.api.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Title {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long title_id;

    @ManyToOne
    @JoinColumn(name = "email")
    private User user;

// 양방향용
//    @OneToMany(mappedBy = "title")
//    private List<Req> reqs;

    @Column(nullable = false)
    private String title;
}
