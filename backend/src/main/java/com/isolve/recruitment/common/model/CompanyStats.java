package com.isolve.recruitment.common.model;

import jakarta.persistence.*;

@Entity
@Table(name = "company_stats")
public class CompanyStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String popiaCompliance;
    private String headquarters;
    private String searchType;
    private String partnershipModel;

    public CompanyStats() {}

    public CompanyStats(String popiaCompliance, String headquarters, String searchType, String partnershipModel) {
        this.popiaCompliance = popiaCompliance;
        this.headquarters = headquarters;
        this.searchType = searchType;
        this.partnershipModel = partnershipModel;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPopiaCompliance() { return popiaCompliance; }
    public void setPopiaCompliance(String popiaCompliance) { this.popiaCompliance = popiaCompliance; }

    public String getHeadquarters() { return headquarters; }
    public void setHeadquarters(String headquarters) { this.headquarters = headquarters; }

    public String getSearchType() { return searchType; }
    public void setSearchType(String searchType) { this.searchType = searchType; }

    public String getPartnershipModel() { return partnershipModel; }
    public void setPartnershipModel(String partnershipModel) { this.partnershipModel = partnershipModel; }
}