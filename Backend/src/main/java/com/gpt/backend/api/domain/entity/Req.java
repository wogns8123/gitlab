package com.gpt.backend.api.domain.entity;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


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
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Title title;

    @Column
    private String chat;
    @Column(length = 2000)
    private String answer;

}
