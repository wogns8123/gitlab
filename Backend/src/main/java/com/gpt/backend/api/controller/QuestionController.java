package com.gpt.backend.api.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    @Value("${gpu.server.url}")
    private String gpuServerUrl;

    private final WebClient webClient;

    public QuestionController() {
        this.webClient = WebClient.builder().build();
    }

    @PostMapping
    public Mono<ResponseEntity<String>> askQuestion(@RequestBody String question) {
        return webClient.post()
                .uri(gpuServerUrl)
                .bodyValue(question)
                .retrieve()
                .bodyToMono(String.class)
                .map(response -> new ResponseEntity<>(response, HttpStatus.OK))
                .onErrorResume(error -> Mono.just(new ResponseEntity<>("Failed to get a response from the GPU server.", HttpStatus.INTERNAL_SERVER_ERROR)));
    }
}
