# Recruiter Module

## Purpose

The Recruiter module manages ISolve recruitment staff.

Recruiters are responsible for managing recruitment activities.

---

## Responsibilities

- Manage recruiter profiles
- Manage recruiter information
- Assign recruitment responsibilities
- Support hiring processes

---

## Owns

- Recruiter profile
- Recruiter details
- Recruitment assignments

---

## Does Not Own

The Recruiter module does not manage:

- Authentication
- Candidates
- Vacancies
- Applications
- Interviews

---

## Main Entities

### Recruiter

Represents an ISolve employee involved in recruitment.

Contains:

- Name
- Department
- Specialisation

---

## Relationships

Recruiter manages:

Vacancies

Applications

Interviews

---

## Communicates With

- Identity Module
- Vacancy Module
- Application Module
- Interview Module

---

## Future Features

- Recruiter workload management
- Performance tracking
- Recruitment statistics