package com.gpt.backend.api.service;

import com.gpt.backend.api.domain.dto.ChatRequestDto;
import com.gpt.backend.api.domain.dto.ChatRespDto;
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

    public ChatRespDto inputChat(ChatRequestDto dto, Principal principal) {
        if (dto.getTitleId() == null) {
            User user = userRepository.findByEmail(principal.getName())
                    .orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다."));
            Title title = titleRepository.save(Title.builder()
                    .user(user)
                    .title(dto.getChat())
                    .build());
            dto.setTitleId(title.getTitleId());
            //TODO Req에 채팅내역저장
        }

        String answer = "GPU요청 후 받은 값";
        Title title = titleRepository.findById(dto.getTitleId())
                .orElseThrow(() -> new IllegalArgumentException("해당 제목이 없습니다."));
        chatRepository.save(Req.builder()
                .chat(dto.getChat())
                .answer(answer)
                .title(title)
                .build());

        log.info("CHAT SAVED");
        return ChatRespDto.builder()
                .answer(answer)
                .titleId(dto.getTitleId())
                .title(title.getTitle())
                .build();
    }
}
