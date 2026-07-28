package com.isolve.recruitment.vacancy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isolve.recruitment.vacancy.domain.Vacancy;

@Repository
public interface VacancyRepository extends JpaRepository<Vacancy, Long> {
    List<Vacancy> findByIsActiveTrue();
}