package com.gpt.backend.api.domain.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Title {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long titleId;

    @ManyToOne
    @JoinColumn(name = "email")
    private User user;

// 양방향용
//    @OneToMany(mappedBy = "title")
//    private List<Req> reqs;

    @Column(nullable = false)
    private String title;
}
