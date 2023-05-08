package com.gpt.backend.api.controller;

import com.gpt.backend.api.domain.enums.ErrorCode;
import com.gpt.backend.api.exception.CustomException;
import com.gpt.backend.api.service.TitleService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private TitleService titleService;

    @GetMapping("")
    @ApiOperation(value = "Title 기록 조회 api", notes = "Title 기록 조회 api")
    public ResponseEntity<Object> getAllTitlesByEmail(Principal principal) {
        try{
            return new ResponseEntity<>(titleService.getAllTitlesByEmail(principal.getName()), HttpStatus.OK);
        }catch (Exception e){
            throw new CustomException(ErrorCode.UNKNOWN_ERROR);
        }
    }
}