# Candidate Module

## Purpose

The Candidate module manages people searching for employment opportunities.

---

## Responsibilities

- Manage candidate profiles
- Store candidate information
- Manage skills and experience
- Maintain CV information
- Track candidate availability

---

## Owns

- Candidate profile
- Skills
- Experience
- Education
- CV information

---

## Does Not Own

The Candidate module does not manage:

- User authentication
- Vacancies
- Applications
- Interviews
- Placements

---

## Main Entities

### Candidate

Represents a job seeker.

Contains:

- Personal details
- Location
- Contact information
- Professional information

---

### Skills

Stores candidate abilities.

Examples:

- Java
- Spring Boot
- PostgreSQL

---

### Experience

Stores previous work history.

---

## Relationships

Candidate belongs to:

User

Candidate can create:

Applications

---

## Communicates With

- Identity Module
- Vacancy Module
- Application Module
- Notification Module

---

## Future Features

- CV parsing
- Candidate matching
- Skill recommendations
- Profile scoring