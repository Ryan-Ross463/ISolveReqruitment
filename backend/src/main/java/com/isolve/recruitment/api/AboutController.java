package com.isolve.recruitment.api;

import com.isolve.recruitment.common.dto.CompanyStatsDto;
import com.isolve.recruitment.common.model.CompanyStats;
import com.isolve.recruitment.common.repository.CompanyStatsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/about")
@CrossOrigin(origins = "*")
public class AboutController {

    private final CompanyStatsRepository statsRepository;

    public AboutController(CompanyStatsRepository statsRepository) {
        this.statsRepository = statsRepository;
    }

    @GetMapping("/stats")
    public ResponseEntity<CompanyStatsDto> getCompanyStats() {
        CompanyStats stats = statsRepository.findAll().stream()
                .findFirst()
                .orElse(new CompanyStats("100%", "Gauteng, South Africa", "Exec & Specialized Search", "Boutique Dedicated Partnership"));

        CompanyStatsDto dto = new CompanyStatsDto(
                stats.getPopiaCompliance(),
                stats.getHeadquarters(),
                stats.getSearchType(),
                stats.getPartnershipModel()
        );

        return ResponseEntity.ok(dto);
    }
}