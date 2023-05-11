package com.gpt.backend.api.domain.dto.response;


import io.swagger.annotations.ApiModel;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "Title - 대화 내역 조회 모델")
public class ReqDto {
    private Long request_id;
    private String chat;
    private String answer;
}