package com.gpt.backend.config;

import com.gpt.backend.config.jwt.JwtAuthenticationFilter;
import com.gpt.backend.config.jwt.JwtTokenProvider;
import com.gpt.backend.config.oauth.CustomOAuth2UserService;
import com.gpt.backend.config.oauth.OAuth2SuccessHandler;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;
    private final CustomOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler successHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .cors()
            .and()
            .httpBasic().disable()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

            .and()
            .authorizeRequests()
            .antMatchers("/api/**").authenticated()       // '/api'의 모든 하위 경로에 대해 인증이 필요함
//            .antMatchers("/api/main/**").permitAll()      // '/api/main'의 모든 하위 경로에 대해 인증 없이 접근 가능
            .anyRequest().permitAll()

            .and()
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), OAuth2LoginAuthenticationFilter.class)
            .oauth2Login()
            .successHandler(successHandler)
            .userInfoEndpoint().userService(oAuth2UserService);

        http
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
