package com.gpt.backend.api.domain.entity;

import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Getter
@Setter
public class Req {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long request_id;

    @ManyToOne
    @JoinColumn(name = "title_id")
    private Title title;

    @Column
    private String question;
    @Column
    private String answer;

}
