package com.gpt.backend.api.domain.dto;

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
