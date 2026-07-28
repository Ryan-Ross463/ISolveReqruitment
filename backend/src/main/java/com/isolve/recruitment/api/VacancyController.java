package com.isolve.recruitment.api;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isolve.recruitment.vacancy.dto.CreateVacancyRequest;
import com.isolve.recruitment.vacancy.dto.VacancyDto;
import com.isolve.recruitment.vacancy.service.VacancyService;

@RestController
@RequestMapping("/api/vacancies")
@CrossOrigin(origins = "*")
public class VacancyController {

    private final VacancyService vacancyService;

    public VacancyController(VacancyService vacancyService) {
        this.vacancyService = vacancyService;
    }

    @GetMapping
    public ResponseEntity<List<VacancyDto>> getActiveVacancies() {
        return ResponseEntity.ok(vacancyService.getAllActiveVacancies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VacancyDto> getVacancyById(@PathVariable Long id) {
        return ResponseEntity.ok(vacancyService.getVacancyById(id));
    }

    @PostMapping
    public ResponseEntity<VacancyDto> createVacancy(@RequestBody CreateVacancyRequest request) {
        VacancyDto created = vacancyService.createVacancy(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VacancyDto> updateVacancy(@PathVariable Long id, @RequestBody CreateVacancyRequest request) {
        VacancyDto updated = vacancyService.updateVacancy(id, request);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deactivateVacancy(@PathVariable Long id) {
        vacancyService.deactivateVacancy(id);
        return ResponseEntity.noContent().build();
    }
}