package com.isolve.recruitment.api;

public class CompanyStatsDto {
    private String popiaCompliance;
    private String headquarters;
    private String searchType;
    private String partnershipModel;

    // Constructors
    public CompanyStatsDto() {}

    public CompanyStatsDto(String popiaCompliance, String headquarters, String searchType, String partnershipModel) {
        this.popiaCompliance = popiaCompliance;
        this.headquarters = headquarters;
        this.searchType = searchType;
        this.partnershipModel = partnershipModel;
    }

    // Getters and Setters
    public String getPopiaCompliance() {
        return popiaCompliance;
    }

    public void setPopiaCompliance(String popiaCompliance) {
        this.popiaCompliance = popiaCompliance;
    }

    public String getHeadquarters() {
        return headquarters;
    }

    public void setHeadquarters(String headquarters) {
        this.headquarters = headquarters;
    }

    public String getSearchType() {
        return searchType;
    }

    public void setSearchType(String searchType) {
        this.searchType = searchType;
    }

    public String getPartnershipModel() {
        return partnershipModel;
    }

    public void setPartnershipModel(String partnershipModel) {
        this.partnershipModel = partnershipModel;
    }
}