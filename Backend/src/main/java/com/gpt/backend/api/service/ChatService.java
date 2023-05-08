package com.gpt.backend.api.service;

import com.gpt.backend.api.domain.dto.response.ReqDto;
import com.gpt.backend.api.domain.dto.response.TitleDto;
import com.gpt.backend.api.domain.entity.Req;
import com.gpt.backend.api.domain.entity.Title;
import com.gpt.backend.api.repository.ReqRepository;
import com.gpt.backend.api.repository.TitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {

    @Autowired
    private TitleRepository titleRepository;

    // Title 기록 조회
    public List<Object> getAllTitlesByEmail(String email) {
        List<Object> resultList = new ArrayList<>();
        List<Title> titles = titleRepository.findTitlesByEmail(email);

        for (Title title : titles) {
            Long title_id = title.getTitle_id();
            String titleText = title.getTitle();

            resultList.add(new TitleDto(title_id, titleText));
        }

        return resultList;
    }


    @Autowired
    private ReqRepository reqRepository;
    // 대화 내역 조회
    public List<Object> getAllChatsByTitle_id(String email, Long title_id) {
        // title_id와 email 같은 지 확인
        if (titleRepository.findEmailByTitle_id(title_id).equals(email)) {
            List<Object> resultList = new ArrayList<>();
            List<Req> reqs = reqRepository.findReqsByTitle_id(title_id);

            for (Req req : reqs) {
                Long request_id = req.getRequest_id();
                String chat = req.getChat();
                String answer = req.getAnswer();

                resultList.add(new ReqDto(request_id, chat, answer));
            }
            return resultList;
        }else {
            throw new IllegalArgumentException("잘못된 접근입니다.");
        }
    }

}