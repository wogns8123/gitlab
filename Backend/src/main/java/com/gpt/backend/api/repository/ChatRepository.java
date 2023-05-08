package com.gpt.backend.api.repository;

import com.gpt.backend.api.domain.entity.Req;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Req, Long> {
}
