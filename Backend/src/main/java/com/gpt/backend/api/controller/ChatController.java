package com.gpt.backend.api.controller;

import com.gpt.backend.api.domain.dto.ChatRespDto;
import com.gpt.backend.api.domain.dto.ChatRequestDto;
import com.gpt.backend.api.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
@Slf4j
public class ChatController {

    private final ChatService chatService;

    @PostMapping
    public ResponseEntity<ChatRespDto> inputChat(@RequestBody ChatRequestDto dto, Principal principal) {
        chatService.inputChat(dto, principal);
        return new ResponseEntity<>(new ChatRespDto(), HttpStatus.OK);

    }
}