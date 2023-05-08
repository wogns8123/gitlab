package com.gpt.backend.api.repository;

import com.gpt.backend.api.domain.entity.Title;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public interface TitleRepository extends JpaRepository<Title, Long> {

    // email로 모든 title 찾기
    @Query("SELECT t FROM Title t WHERE t.user.email = :email")
    List<Title> findTitlesByEmail(@Param("email") String email);

    // title_id로 email 찾기
    @Query("SELECT t.user.email FROM Title t WHERE t.title_id = :title_id")
    String findEmailByTitle_id(@Param("title_id") Long title_id);
}