package com.gpt.backend.config.oauth;

import com.gpt.backend.api.domain.dto.UserDto;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class UserRequestMapper {

    public UserDto toDto(OAuth2User oAuth2User) {
        Map<String, Object> attributes = oAuth2User.getAttributes();
        return UserDto.builder()
                .email((String) attributes.get("email"))
                .nickname((String) attributes.get("name"))
                .build();
    }
}
