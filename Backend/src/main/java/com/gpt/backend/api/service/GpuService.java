package com.gpt.backend.api.service;

import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class GpuService {

    private static final String GPU_API_URL = System.getenv("GPU_API_URL");

    public String calculate(String text) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_JSON);
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        log.info(GPU_API_URL);
        requestBody.add("text", text);
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(requestBody, header);
        ResponseEntity<String> response = restTemplate.exchange(GPU_API_URL, HttpMethod.POST, request, String.class);

        if(response.getStatusCode() == HttpStatus.OK){
            JSONObject jo = new org.json.JSONObject(response.getBody());
            return jo.get("answer").toString();
        }
        else{
            return "error";
        }
    }
}
