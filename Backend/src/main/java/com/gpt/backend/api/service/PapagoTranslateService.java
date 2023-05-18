package com.gpt.backend.api.service;

import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;


@Service
@Slf4j
public class PapagoTranslateService {
    private static final String PAPAGO_API_URL = System.getenv("PAPAGO_API_URL");
    private static final String CLIENT_ID = System.getenv("CLIENT_ID");
    private static final String CLIENT_SECRET = System.getenv("CLIENT_SECRET");

    public String translate(String sourceLanguage, String targetLanguage, String text) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("X-Naver-Client-Id", CLIENT_ID);
        headers.set("X-Naver-Client-Secret", CLIENT_SECRET);

        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("source", sourceLanguage);
        requestBody.add("target", targetLanguage);
        requestBody.add("text", text);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = null;
        try {
            response = restTemplate.exchange(PAPAGO_API_URL, HttpMethod.POST, request, String.class);
        }
        catch (HttpClientErrorException e) {
            log.error("Error: {}", e.getResponseBodyAsString());
            return text;
        }
        // Process the response and extract the translation result
        // The response will be a JSON object. You can use a JSON library like Jackson to parse it.
        // Here, we just return the raw response as a string.
        JSONObject jo = new org.json.JSONObject(response.getBody());
        org.json.JSONObject jo2 = (org.json.JSONObject)jo.get("message");
        org.json.JSONObject jo3 = (org.json.JSONObject)jo2.get("result");
        log.info(jo3.toString());
        log.info((jo3.get("translatedText")).toString());

        return ((jo3.get("translatedText")).toString());
    }
}
