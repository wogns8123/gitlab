package com.gpt.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

@Entity
//@Table(name = "requests")
@Getter
@Setter
public class Req {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long request_id;

    @Column
    private String question;
    @Column
    private String answer;

}
