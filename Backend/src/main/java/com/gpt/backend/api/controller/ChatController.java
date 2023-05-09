package com.gpt.backend.api.controller;

import com.gpt.backend.api.domain.enums.ErrorCode;
import com.gpt.backend.api.exception.CustomException;
import com.gpt.backend.api.service.ChatService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping("")
    @ApiOperation(value = "Title 기록 및 닉네임 조회 api", notes = "Title 기록 및 닉네임 조회 api")
    public ResponseEntity<Object> getAllTitlesByEmail(Principal principal) {
        try{
            return new ResponseEntity<>(chatService.getAllTitlesByEmail(principal.getName()), HttpStatus.OK);
        }catch (Exception e){
            throw new CustomException(ErrorCode.UNKNOWN_ERROR);
        }
    }

    @GetMapping("/{title_id}")
    @ApiOperation(value = "대화 내역 조회 api", notes = "대화 내역 조회 api")
    public ResponseEntity<Object> getAllTitlesByTitle(Principal principal, @PathVariable Long title_id) {
        try{
            return new ResponseEntity<>(chatService.getAllChatsByTitle_id(principal.getName(), title_id), HttpStatus.OK);
        }catch (Exception e){
            throw new CustomException(ErrorCode.UNKNOWN_ERROR);
        }
    }

    @DeleteMapping("/{title_id}")
    @ApiOperation(value = "타이틀 삭제 api", notes = "타이틀 삭제 api")
    public ResponseEntity<Object> deleteTitleByTitleId(Principal principal, @PathVariable Long title_id) {
        try{
            return new ResponseEntity<>(chatService.deleteTitleByTitleId(principal.getName(), title_id), HttpStatus.OK);
        }catch (Exception e){
            throw new CustomException(ErrorCode.UNKNOWN_ERROR);
        }
    }

}