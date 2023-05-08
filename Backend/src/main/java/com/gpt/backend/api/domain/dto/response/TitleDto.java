package com.gpt.backend.api.domain.dto.response;


import io.swagger.annotations.ApiModel;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "전체 Title 조회 모델")
public class TitleDto {
    private Long title_id;
    private String title;
}