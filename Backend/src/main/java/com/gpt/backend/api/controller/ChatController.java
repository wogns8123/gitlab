package com.gpt.backend.api.controller;

import com.gpt.backend.api.domain.dto.ChatRequestDto;
import com.gpt.backend.api.domain.dto.ChatRespDto;
import com.gpt.backend.api.domain.enums.ErrorCode;
import com.gpt.backend.api.exception.CustomException;
import com.gpt.backend.api.service.ChatService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
@Slf4j
public class ChatController {

    private final ChatService chatService;

    @GetMapping("")
    @ApiOperation(value = "Title 기록 및 닉네임 조회 api", notes = "Title 기록 및 닉네임 조회 api")
    public ResponseEntity<Object> getAllTitlesByEmail(Principal principal) {
        try{
            return new ResponseEntity<>(chatService.getAllTitlesByEmail(principal.getName()), HttpStatus.OK);
        }catch (Exception e){
            throw new CustomException(ErrorCode.UNKNOWN_ERROR);
        }
    }

    @GetMapping("/{titleId}")
    @ApiOperation(value = "대화 내역 조회 api", notes = "대화 내역 조회 api")
    public ResponseEntity<Object> getAllTitlesByTitle(Principal principal, @PathVariable Long titleId) {
        try{
            return new ResponseEntity<>(chatService.getAllChatsByTitleId(principal.getName(), titleId), HttpStatus.OK);
        }catch (Exception e){
            throw new CustomException(ErrorCode.UNKNOWN_ERROR);
        }
    }

    @DeleteMapping("/{titleId}")
    @ApiOperation(value = "타이틀 삭제 api", notes = "타이틀 삭제 api")
    public ResponseEntity<Object> deleteTitleByTitleId(Principal principal, @PathVariable Long titleId) {
        try{
            return new ResponseEntity<>(chatService.deleteTitleByTitleId(principal.getName(), titleId), HttpStatus.OK);
        }catch (Exception e){
            throw new CustomException(ErrorCode.UNKNOWN_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<ChatRespDto> inputChat(@RequestBody ChatRequestDto dto, Principal principal) {
        ChatRespDto resp = chatService.inputChat(dto, principal);
        return new ResponseEntity<>(resp, HttpStatus.OK);

    }
}