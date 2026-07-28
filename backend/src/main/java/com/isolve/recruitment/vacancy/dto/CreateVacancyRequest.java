package com.isolve.recruitment.vacancy.dto;

import java.util.List;

public class CreateVacancyRequest {

    private String title;
    private String companyName;
    private String location;
    private String salaryRange;
    private String employmentType;
    private String postedTimeAgo;
    private List<String> tags;

    public CreateVacancyRequest() {}

    public CreateVacancyRequest(String title, String companyName, String location, 
                                String salaryRange, String employmentType, 
                                String postedTimeAgo, List<String> tags) {
        this.title = title;
        this.companyName = companyName;
        this.location = location;
        this.salaryRange = salaryRange;
        this.employmentType = employmentType;
        this.postedTimeAgo = postedTimeAgo;
        this.tags = tags;
    }

    // Getters and Setters
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

    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
}