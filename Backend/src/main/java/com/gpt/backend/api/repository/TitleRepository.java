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

    // user_id로 모든 title 찾기
    @Query("SELECT t FROM Title t WHERE t.user.user_id = :user_id")
    List<Title> findTitlesByUserID(@Param("user_id") Long user_id);

    // title_id로 user_id 찾기
    @Query("SELECT t.user.user_id FROM Title t WHERE t.title_id = :title_id")
    Long findUserIdByTitleId(@Param("title_id") Long title_id);


}