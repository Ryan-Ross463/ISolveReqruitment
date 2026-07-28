package com.isolve.recruitment.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.isolve.recruitment.common.model.CompanyStats;
import com.isolve.recruitment.common.repository.CompanyStatsRepository;
import com.isolve.recruitment.vacancy.domain.Vacancy;
import com.isolve.recruitment.vacancy.repository.VacancyRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(CompanyStatsRepository statsRepository, VacancyRepository vacancyRepository) {
        return args -> {
            if (statsRepository.count() == 0) {
                CompanyStats initialStats = new CompanyStats(
                    "100%",
                    "Gauteng, South Africa",
                    "Exec & Specialized Search",
                    "Boutique Dedicated Partnership"
                );
                statsRepository.save(initialStats);
                System.out.println("✅ Seeded initial company stats into PostgreSQL");
            }

            if (vacancyRepository.count() == 0) {
                vacancyRepository.saveAll(List.of(
                    new Vacancy("Senior Full Stack Engineer", "TechScale Solutions", "Johannesburg (Hybrid)", "R 85,000 - R 110,000 / month", "Full-Time", "2 days ago", "React, Node.js, TypeScript, AWS"),
                    new Vacancy("Lead UX/UI Designer", "Innovate Digital", "Cape Town (Remote)", "R 70,000 - R 90,000 / month", "Full-Time", "1 day ago", "Figma, Design Systems, User Research"),
                    new Vacancy("DevOps Specialist", "FinTech Global", "Pretoria (On-site)", "R 650 - R 800 / hour", "Contract", "Just now", "Kubernetes, Docker, CI/CD, Terraform")
                ));
                System.out.println("✅ Seeded featured vacancies into PostgreSQL");
            }
        };
    }
}