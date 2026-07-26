# Application Module

## Purpose

The Application module manages the process where candidates apply for vacancies.

---

## Responsibilities

- Receive applications
- Track application progress
- Manage application status
- Maintain application history

---

## Owns

- Application
- Application status
- Application history

---

## Does Not Own

The Application module does not manage:

- Candidate profiles
- Vacancy details
- Interviews
- Placement information

---

## Main Entity

### Application

Represents a candidate applying for a vacancy.

Contains:

- Candidate reference
- Vacancy reference
- Status
- Dates

---

## Application Lifecycle

Possible states:

- Submitted
- Reviewing
- Shortlisted
- Rejected
- Accepted

---

## Communicates With

- Candidate Module
- Vacancy Module
- Interview Module
- Notification Module

---

## Future Features

- Automated screening
- Candidate ranking
- Application analytics