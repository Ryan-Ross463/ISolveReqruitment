package com.isolve.recruitment.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/about")
@CrossOrigin(origins = "*") // Allows all local frontend ports
public class AboutController {

    @GetMapping("/stats")
    public ResponseEntity<CompanyStatsDto> getCompanyStats() {
        CompanyStatsDto stats = new CompanyStatsDto(
            "100%", 
            "Gauteng, South Africa", 
            "Exec & Specialized Search", 
            "Boutique Dedicated Partnership"
        );
        return ResponseEntity.ok(stats);
    }
}