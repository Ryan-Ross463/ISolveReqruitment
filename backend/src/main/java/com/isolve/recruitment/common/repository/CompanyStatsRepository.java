package com.isolve.recruitment.common.repository;

import com.isolve.recruitment.common.model.CompanyStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyStatsRepository extends JpaRepository<CompanyStats, Long> {
}