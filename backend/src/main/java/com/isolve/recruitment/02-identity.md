# Identity Module

## Purpose

The Identity module manages user accounts inside the ISolve Recruitment System.

It represents who users are and what permissions they have.

---

## Responsibilities

- Create user accounts
- Manage authentication information
- Assign roles
- Manage permissions
- Manage account status

---

## Owns

- User
- Role
- Permission
- Account status

---

## Does Not Own

The Identity module does not manage:

- Candidate information
- Recruiter information
- Client information
- Vacancies
- Applications

---

## Main Entities

### User

Represents a system account.

Contains:

- Email
- Password
- Role
- Status

---

### Role

Defines user category.

Examples:

- Candidate
- Recruiter
- Client
- Admin

---

### Permission

Defines allowed actions.

Examples:

- Create vacancy
- Review application
- Schedule interview

---

## Relationships

User connects to business profiles:

User

↓

Candidate

Recruiter

Client

---

## Communicates With

- Security Module
- Candidate Module
- Recruiter Module
- Client Module

---

## Future Features

- Email verification
- Password reset
- Login history
- Account auditing