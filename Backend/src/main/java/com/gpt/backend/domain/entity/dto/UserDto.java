package com.gpt.backend.domain.entity.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class UserDto {

    private String email;
    private String nickname;
}
