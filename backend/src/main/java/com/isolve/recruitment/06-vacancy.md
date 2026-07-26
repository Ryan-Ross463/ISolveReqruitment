# Vacancy Module

## Purpose

The Vacancy module manages available job opportunities.

---

## Responsibilities

- Create vacancies
- Update vacancies
- Publish job opportunities
- Manage vacancy status
- Store job requirements

---

## Owns

- Vacancy
- Job requirements
- Vacancy status

---

## Does Not Own

The Vacancy module does not manage:

- Candidates
- Applications
- Clients
- Interviews

---

## Main Entities

### Vacancy

Represents an available position.

Contains:

- Title
- Description
- Requirements
- Status

---

### Vacancy Status

Examples:

- Draft
- Published
- Closed
- Filled

---

## Relationships

Client creates vacancies.

Candidates apply for vacancies.

---

## Communicates With

- Client Module
- Candidate Module
- Application Module
- Notification Module

---

## Future Features

- Job recommendations
- Vacancy search
- AI matching