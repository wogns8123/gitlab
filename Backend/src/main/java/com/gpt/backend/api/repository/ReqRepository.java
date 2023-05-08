package com.gpt.backend.api.repository;

import com.gpt.backend.api.domain.entity.Req;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public interface ReqRepository extends JpaRepository<Req, Long> {

    @Query("SELECT r FROM Req r WHERE r.title.title_id = :title_id")
    List<Req> findReqsByTitle_id(@Param("title_id") Long title_id);

}