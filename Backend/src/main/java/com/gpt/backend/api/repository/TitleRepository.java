package com.gpt.backend.api.repository;

import com.gpt.backend.api.domain.entity.Title;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TitleRepository extends JpaRepository<Title, Long> {
}
