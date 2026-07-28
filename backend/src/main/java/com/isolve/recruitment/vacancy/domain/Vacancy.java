package com.isolve.recruitment.vacancy.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vacancy")
public class Vacancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String location;

    @Column(name = "salary_range")
    private String salaryRange;

    @Column(name = "employment_type")
    private String employmentType;

    @Column(name = "posted_time_ago")
    private String postedTimeAgo;

    private String tags;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    public Vacancy() {}

    public Vacancy(String title, String companyName, String location, String salaryRange, 
                   String employmentType, String postedTimeAgo, String tags) {
        this.title = title;
        this.companyName = companyName;
        this.location = location;
        this.salaryRange = salaryRange;
        this.employmentType = employmentType;
        this.postedTimeAgo = postedTimeAgo;
        this.tags = tags;
        this.isActive = true;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCompanyName() { return companyName; }
    public void setCompanyName(String companyName) { this.companyName = companyName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getSalaryRange() { return salaryRange; }
    public void setSalaryRange(String salaryRange) { this.salaryRange = salaryRange; }

    public String getEmploymentType() { return employmentType; }
    public void setEmploymentType(String employmentType) { this.employmentType = employmentType; }

    public String getPostedTimeAgo() { return postedTimeAgo; }
    public void setPostedTimeAgo(String postedTimeAgo) { this.postedTimeAgo = postedTimeAgo; }

    public String getTags() { return tags; }
    public void setTags(String tags) { this.tags = tags; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}