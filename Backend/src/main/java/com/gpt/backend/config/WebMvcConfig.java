package com.gpt.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        System.out.println("config - corsMapping");

        registry.addMapping("/**")
                .allowedMethods(CorsConfiguration.ALL)
                .allowedHeaders(CorsConfiguration.ALL)
                .allowedOrigins("http://localhost:3000", "http://localhost:80", "http://localhost:8080", "http://k8e102.p.ssafy.io", "https://k8e102.p.ssafy.io", "https://customgptchat.com")
                .allowedOriginPatterns(CorsConfiguration.ALL)
//                .allowedOriginPatterns(CorsConfiguration.ALL, "*")
                .allowCredentials(true);
    }
}
