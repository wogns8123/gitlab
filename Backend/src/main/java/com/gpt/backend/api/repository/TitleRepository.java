package com.gpt.backend.api.repository;

import com.gpt.backend.api.domain.entity.Title;
import com.gpt.backend.api.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Repository
@Transactional
public interface TitleRepository extends JpaRepository<Title, Long> {

    // user_id로 모든 title 찾기
    @Query("SELECT t FROM Title t WHERE t.user.userId = :userId")
    List<Title> findTitlesByUserID(@Param("userId") Long userId);

    // title_id로 user_id 찾기
    @Query("SELECT t.user.userId FROM Title t WHERE t.titleId = :titleId")
    Long findUserIdByTitleId(@Param("titleId") Long titleId);

    // titleId로 레코드 찾기
    Optional<Title> findByTitleId(Long titleId);

}