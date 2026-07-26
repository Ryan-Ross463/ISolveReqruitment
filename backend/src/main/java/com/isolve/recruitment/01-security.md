# Security Module

## Purpose

The Security module protects the ISolve Recruitment System.

It manages authentication, authorization, and access control.

The module ensures that users can only access features allowed by their roles.

---

## Responsibilities

- Authenticate users
- Protect application endpoints
- Manage authorization rules
- Encrypt passwords
- Apply security policies
- Validate access permissions

---

## Owns

- Security configuration
- Authentication logic
- Authorization rules
- Password encryption
- Security filters

---

## Does Not Own

The Security module does not manage:

- User accounts
- Candidate profiles
- Recruiter profiles
- Client profiles
- Vacancies
- Applications

---

## Main Concepts

### Authentication

Determines who the user is.

Example:

A user logs into the system.

---

### Authorization

Determines what the user can do.

Example:

A recruiter can create vacancies.

A candidate can apply for jobs.

---

## Communicates With

### Identity Module

Uses Identity to retrieve:

- User information
- Roles
- Permissions

---

## Future Features

- JWT authentication
- OAuth2 login
- Refresh tokens
- Two-factor authentication
- Audit logging