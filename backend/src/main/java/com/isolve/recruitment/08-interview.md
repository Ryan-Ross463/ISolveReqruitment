# Interview Module

## Purpose

The Interview module manages interviews between candidates and recruitment stakeholders.

---

## Responsibilities

- Schedule interviews
- Manage interview details
- Store interview outcomes
- Track interview progress

---

## Owns

- Interview
- Interview schedule
- Interview feedback

---

## Does Not Own

The Interview module does not manage:

- Candidates
- Applications
- Recruiters
- Placements

---

## Main Entities

### Interview

Contains:

- Date
- Time
- Location
- Status

---

### Feedback

Stores interview results.

---

## Relationships

Application creates interviews.

---

## Communicates With

- Application Module
- Candidate Module
- Recruiter Module
- Notification Module

---

## Future Features

- Video interviews
- Interview scoring
- Calendar integration