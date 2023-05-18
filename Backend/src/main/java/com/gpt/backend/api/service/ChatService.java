package com.gpt.backend.api.service;

import com.gpt.backend.api.domain.dto.ChatRequestDto;
import com.gpt.backend.api.domain.dto.ChatRespDto;
import com.gpt.backend.api.domain.dto.response.ReqDto;
import com.gpt.backend.api.domain.dto.response.TitleDto;
import com.gpt.backend.api.domain.entity.Req;
import com.gpt.backend.api.domain.entity.Title;
import com.gpt.backend.api.domain.entity.User;
import com.gpt.backend.api.repository.ReqRepository;
import com.gpt.backend.api.repository.TitleRepository;
import com.gpt.backend.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Transactional
@Service
@RequiredArgsConstructor
@Slf4j
public class ChatService {

    private final ReqRepository reqRepository;
    private final TitleRepository titleRepository;
    private final UserRepository userRepository;
    private final PapagoTranslateService papagoTranslateService;
    private final GpuService gpuService;

    // Title 기록 및 닉네임 조회
    public Map<String, Object> getAllTitlesByEmail(String email) {
        // email로 userId 찾기
        Long userId = userRepository.findByEmail(email).get().getUserId();

        List<TitleDto> titlesList = new ArrayList<>();
        List<Title> titles = titleRepository.findTitlesByUserID(userId);

        for (Title title : titles) {
            Long titleId = title.getTitleId();
            String titleText = title.getTitle();

            titlesList.add(new TitleDto(titleId, titleText));
        }

        String nickname = userRepository.findByEmail(email).get().getNickname();

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("nickname", nickname);
        resultMap.put("titles", titlesList);

        return resultMap;
    }


    // 대화 내역 조회
    public List<Object> getAllChatsByTitleId(String email, Long titleId) {
        // titleId와 userId 같은 지 확인
        Long userId = userRepository.findByEmail(email).get().getUserId();
        if (titleRepository.findUserIdByTitleId(titleId).equals(userId)) {
            List<Object> resultList = new ArrayList<>();
            List<Req> reqs = reqRepository.findReqsByTitleId(titleId);

            for (Req req : reqs) {
                Long requestId = req.getRequestId();
                String chat = req.getChat();
                String answer = req.getAnswer();

                resultList.add(new ReqDto(requestId, chat, answer));
            }
            return resultList;
        }else {
            throw new IllegalArgumentException("잘못된 접근입니다.");
        }
    }

    // 타이틀 삭제
    public List<Object> deleteTitleByTitleId(String email, Long titleId) {
        // userId와 일치하면
        Long userId = userRepository.findByEmail(email).get().getUserId();
        if (titleRepository.findUserIdByTitleId(titleId).equals(userId)) {
            // 값을 찾아서
            Title searchTitle = titleRepository.findByTitleId(titleId).get();
            // System.out.println(searchTitle);
            // 삭제
            titleRepository.delete(searchTitle);
        }
        return null;
    }

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

        String answer = papagoTranslateService.translate("ko", "en", dto.getChat());
        answer = gpuService.calculate(answer);
//        String answer = gpuService.calculate(dto.getChat());
        answer = papagoTranslateService.translate("en", "ko", answer);
        Title title = titleRepository.findById(dto.getTitleId())
                .orElseThrow(() -> new IllegalArgumentException("해당 제목이 없습니다."));
        reqRepository.save(Req.builder()
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
