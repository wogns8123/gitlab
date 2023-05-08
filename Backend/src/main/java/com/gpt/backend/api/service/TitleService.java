package com.gpt.backend.api.service;

import com.gpt.backend.api.domain.dto.response.TitleDto;
import com.gpt.backend.api.domain.entity.Title;
import com.gpt.backend.api.repository.TitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TitleService {

    @Autowired
    private TitleRepository titleRepository;

    // Title 기록 조회
    public List<Object> getAllTitlesByEmail(String email) {
        List<Object> resultList = new ArrayList<>();
        List<Title> titles = titleRepository.findTitlesByEmail(email);

        for (Title title : titles) {
            Long titleId = title.getTitle_id();
            String titleText = title.getTitle();

            resultList.add(new TitleDto(titleId, titleText));
        }

        return resultList;
    }
}