package com.gpt.backend.api.service;

import com.gpt.backend.api.domain.dto.ChatRequestDto;
import com.gpt.backend.api.domain.entity.Req;
import com.gpt.backend.api.domain.entity.Title;
import com.gpt.backend.api.domain.entity.User;
import com.gpt.backend.api.repository.ChatRepository;
import com.gpt.backend.api.repository.TitleRepository;
import com.gpt.backend.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.security.Principal;

@Transactional
@Service
@RequiredArgsConstructor
@Slf4j
public class ChatService {
    private final ChatRepository chatRepository;
    private final TitleRepository titleRepository;
    private final UserRepository userRepository;

    public void inputChat(ChatRequestDto dto, Principal principal){
        if (dto.getTitleId() == null){
            User user = userRepository.findByEmail(principal.getName())
                    .orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다."));
            Title title = titleRepository.save(Title.builder()
                    .user(user)
                    .title(dto.getChat())
                    .build());
            dto.setTitleId(title.getTitleId());
            //TODO Req에 채팅내역저장
//            Req.builder()
            System.out.println("titleId is null");
        }
        else {
            System.out.println("titleId is not null");
        }
        System.out.println("inputChat");
    }
}
