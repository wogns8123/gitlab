package com.gpt.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Table;


import javax.persistence.*;
import java.util.Set;

@Entity
//@Table(name = "title")
@Getter
@Setter
public class Title {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long title_id;

    @OneToMany(mappedBy = "title_id")
    private Set<Req> reqs;
}
