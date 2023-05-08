package com.gpt.backend.api.domain.entity;

import lombok.*;


import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Req {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requestId;

    @ManyToOne
    @JoinColumn(name = "titleId")
    private Title title;

    @Column
    private String chat;
    @Column
    private String answer;

}
