package com.isolve.recruitment.vacancy.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isolve.recruitment.vacancy.domain.Vacancy;
import com.isolve.recruitment.vacancy.dto.CreateVacancyRequest;
import com.isolve.recruitment.vacancy.dto.VacancyDto;
import com.isolve.recruitment.vacancy.repository.VacancyRepository;

@Service
@Transactional
public class VacancyService {

    private final VacancyRepository vacancyRepository;

    public VacancyService(VacancyRepository vacancyRepository) {
        this.vacancyRepository = vacancyRepository;
    }

    @Transactional(readOnly = true)
    public List<VacancyDto> getAllActiveVacancies() {
        return vacancyRepository.findByIsActiveTrue()
                .stream()
                .map(this::mapToDto)
                .toList();
    }

    @Transactional(readOnly = true)
    public VacancyDto getVacancyById(Long id) {
        Vacancy vacancy = vacancyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Vacancy not found with id: " + id));
        return mapToDto(vacancy);
    }

    public VacancyDto createVacancy(CreateVacancyRequest request) {
        String tagsCsv = request.getTags() != null ? String.join(", ", request.getTags()) : "";

        Vacancy vacancy = new Vacancy(
                request.getTitle(),
                request.getCompanyName(),
                request.getLocation(),
                request.getSalaryRange(),
                request.getEmploymentType(),
                request.getPostedTimeAgo() != null ? request.getPostedTimeAgo() : "Just now",
                tagsCsv
        );

        Vacancy saved = vacancyRepository.save(vacancy);
        return mapToDto(saved);
    }

    public VacancyDto updateVacancy(Long id, CreateVacancyRequest request) {
        Vacancy vacancy = vacancyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Vacancy not found with id: " + id));

        vacancy.setTitle(request.getTitle());
        vacancy.setCompanyName(request.getCompanyName());
        vacancy.setLocation(request.getLocation());
        vacancy.setSalaryRange(request.getSalaryRange());
        vacancy.setEmploymentType(request.getEmploymentType());
        if (request.getPostedTimeAgo() != null) {
            vacancy.setPostedTimeAgo(request.getPostedTimeAgo());
        }
        if (request.getTags() != null) {
            vacancy.setTags(String.join(", ", request.getTags()));
        }

        Vacancy updated = vacancyRepository.save(vacancy);
        return mapToDto(updated);
    }

    public void deactivateVacancy(Long id) {
        Vacancy vacancy = vacancyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Vacancy not found with id: " + id));
        vacancy.setIsActive(false);
        vacancyRepository.save(vacancy);
    }

    private VacancyDto mapToDto(Vacancy vacancy) {
        return new VacancyDto(
                vacancy.getId(),
                vacancy.getTitle(),
                vacancy.getCompanyName(),
                vacancy.getLocation(),
                vacancy.getSalaryRange(),
                vacancy.getEmploymentType(),
                vacancy.getPostedTimeAgo(),
                vacancy.getTags()
        );
    }
}